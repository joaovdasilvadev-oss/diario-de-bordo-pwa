const STORAGE_KEY = "diarioDeBordoEntradas";

const form = document.querySelector("#entryForm");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#date");
const entriesList = document.querySelector("#entriesList");
const entryCount = document.querySelector("#entryCount");
const formMessage = document.querySelector("#formMessage");
const installButton = document.querySelector("#installButton");
const connectionStatus = document.querySelector("#connectionStatus");

let entries = loadEntries();
let installPrompt = null;

dateInput.value = new Date().toISOString().slice(0, 10);
renderEntries();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const date = dateInput.value;

  if (!title || !description || !date) {
    formMessage.textContent = "Preencha todos os campos.";
    return;
  }

  const newEntry = {
    id: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    title,
    description,
    date
  };

  entries.unshift(newEntry);
  saveEntries();
  renderEntries();

  form.reset();
  dateInput.value = new Date().toISOString().slice(0, 10);
  formMessage.textContent = "Entrada salva com sucesso!";
  titleInput.focus();
});

function loadEntries() {
  try {
    const savedEntries = localStorage.getItem(STORAGE_KEY);
    return savedEntries ? JSON.parse(savedEntries) : [];
  } catch (error) {
    console.error("Não foi possível carregar as entradas:", error);
    return [];
  }
}

function saveEntries() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error("Não foi possível salvar as entradas:", error);
    formMessage.textContent = "Não foi possível salvar. Verifique o armazenamento do navegador.";
  }
}

function renderEntries() {
  entriesList.replaceChildren();
  entryCount.textContent = `${entries.length} ${entries.length === 1 ? "entrada" : "entradas"}`;

  if (entries.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "vazio";
    emptyMessage.textContent = "Ainda não há registros. Crie sua primeira entrada ao lado!";
    entriesList.appendChild(emptyMessage);
    return;
  }

  entries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "entrada";

    const top = document.createElement("div");
    top.className = "entrada-topo";

    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = entry.title;

    const date = document.createElement("p");
    date.className = "data-entrada";
    date.textContent = formatDate(entry.date);

    const description = document.createElement("p");
    description.className = "descricao-entrada";
    description.textContent = entry.description;

    const removeButton = document.createElement("button");
    removeButton.className = "botao-remover";
    removeButton.type = "button";
    removeButton.textContent = "Remover";
    removeButton.setAttribute("aria-label", `Remover entrada: ${entry.title}`);
    removeButton.addEventListener("click", () => removeEntry(entry.id));

    content.append(title, date);
    top.append(content, removeButton);
    card.append(top, description);
    entriesList.appendChild(card);
  });
}

function removeEntry(id) {
  entries = entries.filter((entry) => entry.id !== id);
  saveEntries();
  renderEntries();
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
updateConnectionStatus();

function updateConnectionStatus() {
  connectionStatus.textContent = navigator.onLine
    ? "Você está online"
    : "Você está offline — seus registros continuam disponíveis";
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) return;

  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  installButton.hidden = true;
});

window.addEventListener("appinstalled", () => {
  installPrompt = null;
  installButton.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      console.log("Service Worker registrado com sucesso.");
    } catch (error) {
      console.error("Falha ao registrar o Service Worker:", error);
    }
  });
}
