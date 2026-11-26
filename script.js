console.log(`
    📌🌍✨ PINIVERSE ✨🌍📌
    Built with 💜 by Pinbow 🌈
    No cheating, Pin.
    The website knows.
    
                                                                                                        
                                                                                                    
                                                        @@@@@@@@@@@@@@@@                            
                                                      @@@@@@%%%%%%@@@@@@@@@                         
                                                     @@@@%#####*******%@@@@@@@                      
                                                    @@@@%####************#@@@@@@@                   
                                                    @@@@#####***************#@@@@@@                 
                                                    @@@@####*******************@@@@@@               
                                                    @@@@####*********************%@@@@@             
                                                     @@@%###***********************%@@@@            
                                                     @@@@####***********************#@@@@           
                                                      @@@@###*************************%@@@@         
                                                    @@@@@@%###*************************#@@@@        
                                                 @@@@@@@@@@%###**************************@@@@       
                                              @@@@@@@####@@@@###**************************@@@@      
                             @@@@@@@@@@@@@  @@@@@@%#######@@@@%##**************************%@@@     
                         @@@@@@@@@@@@@@@@@@@@@@%###########%@@@%##**************************@@@@    
                      @@@@@@@@%%#######@@@@@@################@@@@###************************#@@@    
                     #%@@%#######***#@@@@@%###*************###%@@@@##************************%@@@   
                 @@@#########*******@@@@##********************##@@@@@##**********************#@@@   
               @@@@@######***********@@@%************************#@@@@@##*********************@@@   
             @@@@@%#####*************#@@@%************************##%@@@@%#******************#@@@   
            @@@@%#####****************#@@@#**************************#%@@@@@%****************@@@@   
           @@@@%####********************@@@%#**************************##%@@@@@@#**********#@@@@    
           @@@%####**********************@@@@#***************************##@@@@@@@@@@@%%%**#@@@     
           @@@####************************@@@@#**************************#@@@@@@@@@@@@@@@@          
           @@@###**************************#@@@@#***********************#@@@@@                      
           @@@@##****************************%@@@%*********************#@@@@                        
           @@@@%#*****************************#@@@@%#*****************%@@@@                         
            @@@@%#******************************#@@@@%#*************#%@@@@                          
             @@@@%********************************#@@@@%#**********#@@@@@                           
              @@@@%*********************************#@@@@@%#******#@@@@                             
               @@@@%***********************************%@@@@@%##*%@@@@@@                            
                @@@@%*************************************%@@@@@@@@@%@@@                            
                 @@@@@***************************************#%@@@@**@@@                            
                   @@@@#*********************************************@@@@                           
                    @@@@%********************************************@@@                            
                     @@@@@#*****************************************#@@@                            
                      @@@@@%****************************************@@@@                            
                    @@@@@%@@@%*************************************#@@@                             
                   @@@@#=-=%@@@%**********************************#@@@@                             
                 @@@@@=---=%@@@@@%********************************@@@@                              
               @@@@@=::--#@@@@@@@@@%#****************************@@@@                               
             @@@@@+::::*@@@@@   @@@@@@%************************%@@@@                                
            @@@@*::::=@@@@@        @@@@@@#*******************#@@@@@                                 
           @@@@-:::=%@@@@            @@@@@@@%**************#@@@@@                                   
         @@@@#:::=%@@@@                 @@@@@@@@#********#@@@@@                                     
        @@@@*::*@@@@@                       @@@@@@@@@@@@@@@@@                                       
       @@@@*+@@@@@@                            @@@@@@@@@@@@                                         
      @@@@@@@@@@@                                                                                   
    @@@@@@@@@@                                                                                      
   @@@@@@@@                                                                                         
   @@@@@@                                                                                           
                                                                                                    
                                                                                                    
    `);

const SUPABASE_URL = "https://aakgqbiqbtbgaublvutw.supabase.co";
const SUPABASE_KEY = "sb_publishable_g_fnLMPTtdJFZMD3zisXsQ_pbshTVMG";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const filmTexts = [
    "<strong>Watch a film while wearing your dinosaur pyjamas.</strong><p>Choose something completely cosy or wildly mismatched with prehistoric loungewear.</p>",
    "<strong>Watch a film while drinking a home-made bubble tea.</strong><p>Pair the perfect flavour and boba with whatever you choose to put on the screen.</p>",
    "<strong>Rewatch a film you loved as a child.</strong><p>Reflect on whether it still holds up, and notice what clicks for you now that went completely over your head back then.</p>",
    "<strong>Watch a comfort film and identify exactly why it comforts you.</strong><p>Pinpoint whether the magic lies in nostalgia, predictability, warmth, or just a really great soundtrack.</p>",
    "<strong>Watch a film with a low Rotten Tomatoes score and defend one good thing about it.</strong><p>Find one moment, performance, sound choice, costume, line or idea that genuinely worked.</p>",
    "<strong>Watch a film from the year you were born.</strong><p>Reflect on what elements feel entirely timeless and what feels very much of its specific era.</p>",
    "<strong>Watch a film over 150 minutes.</strong><p>Make it a proper event with dedicated snacks and decide at the end if that massive runtime was actually earned.</p>",
    "<strong>Watch a film under 90 minutes.</strong><p>Celebrate a beautifully concise story that gets straight in, does the job flawlessly, and gets right back out.</p>",
    "<strong>Watch a film from before 1970.</strong><p>Look out for what still feels incredibly fresh, funny, moving, or surprisingly strange to a modern audience.</p>",
    "<strong>Watch a film released in the last 12 months.</strong><p>Think about what it says about right now, from current anxieties and technology to modern humour.</p>",
    "<strong>Watch a film where the setting feels like a main character.</strong><p>Look for a house, city, island, or landscape that actively shapes the entire story.</p>",
    "<strong>Watch a film with a soundtrack that does heavy emotional work.</strong><p>Notice one specific scene where the music entirely shifts how you are feeling.</p>",
    "<strong>Watch a film with subtitles.</strong><p>Pick something in a language you do not speak and notice how you read emotion and tone more closely when relying on text.</p>",
    "<strong>Watch a film where food plays an important role.</strong><p>Pay attention to how meals drive the plot, with bonus points for a matching snack while you watch.</p>",
    "<strong>Watch a film directed by a woman.</strong><p>Choose any genre you like and spot one specific creative or stylistic choice that really stands out.</p>",
    "<strong>Watch a film that makes you reflect on family dynamics.</strong><p>Explore how the story handles the complexities of family, whether it is biological, complicated, or found.</p>",
    "<strong>Watch a film that explores the highs and lows of friendship.</strong><p>Think about what the narrative says about loyalty, boundaries, or the bittersweet nature of growing apart.</p>",
    "<strong>Watch a film with someone else and let them choose it.</strong><p>Give up all veto power and enter someone else's taste with pure curiosity.</p>",
    "<strong>Watch a film with a brilliant villain or antagonist.</strong><p>Reflect on whether they are frightening, strangely understandable, charismatic, or just a total moral mess.</p>",
    "<strong>Watch a film with a morally complicated ending.</strong><p>Decide for yourself whether the final moments felt satisfying, realistic, fair, or deeply frustrating.</p>",
    "<strong>Watch a documentary about a topic you know almost nothing about.</strong><p>Bring away one fascinating new fact and one question you want to look up later.</p>",
    "<strong>Watch a film you abandoned previously.</strong><p>Give it a proper second chance and decide once and for all whether past-you made the right call.</p>",
    "<strong>Watch a film set somewhere you have never been.</strong><p>Notice whether the scenery makes you want to visit, or if it makes you question how places are stereotyped.</p>",
    "<strong>Watch a film you feel like you “should” have seen by now.</strong><p>Fill a personal culture gap by finally putting on that classic, cult favourite, or award-winner.</p>",
    "<strong>Watch a film that prompts a deep post-credits analysis.</strong><p>Break down one standout performance, excellent sound choice, or specific line that stuck in your head.</p>",
];

const filmItems = Array.from(
    { length: 25 },
    (_, i) => ({
        id: `film-${i + 1}`,
        number: i + 1,
        text: filmTexts[i],
        image: `images/film-${i + 1}.png`
    })
);

const geocacheTexts = [
    "<strong>Find a cache within walking distance of somewhere you already go.</strong><p>Make it a low-effort addition to your routine, like a lunch break, shopping trip, or a familiar weekend walk.</p>",
    "<strong>Write the backstory for a trackable and release it into the wild.</strong><p>Give it a name, a fun mission, and a bit of personality before dropping it off in a suitable cache or bug hotel.</p>",
    "<strong>Add three distinct types of swag to a cache.</strong><p>Pack a small selection of fresh treasures to leave behind, such as something useful, something cheerful, and something child-friendly.</p>",
    "<strong>Replace or add a fresh log sheet if a cache container needs a bit of love.</strong><p>Keep a spare log strip or waterproof paper in your kit to perform a quick, helpful bit of informal maintenance.</p>",
    "<strong>Find a cache with a friend or family member who has never tried it before.</strong><p>Introduce them to the game with something straightforward, making the walk and the discovery the main event.</p>",
    "<strong>Find a cache in a local park you have never properly explored.</strong><p>Use the hunt as an excuse to wander down a new path and see a familiar green space from a completely different angle.</p>",
    "<strong>Find a cache with an interesting or unusually clever container.</strong><p>Look out for something disguised, magnetic, camouflaged, or uniquely designed that makes you smile when you spot it.</p>",
    "<strong>Leave a quick, encouraging note for the next person who finds the cache.</strong><p>Slip a tiny, cheerful message inside the container to give the future finder an unexpected bit of warmth.</p>",
    "<strong>Choose a cache purely because of the location rather than the difficulty rating.</strong><p>Prioritise a spot with a beautiful viewpoint, a historical marker, a quiet sculpture, or a hidden green corner.</p>",
    "<strong>Find a cache connected to local history.</strong><p>Read the description carefully before you set off and come away with one fascinating fact you didn't know about the area.</p>",
    "<strong>Plan a thoroughly civilised cache-and-coffee outing.</strong><p>Pair a straightforward, accessible hunt with a stop for a hot drink, a nice snack, or a quiet bench picnic.</p>",
    "<strong>Take a photo of the lovely scenery near a cache without giving the hiding place away.</strong><p>Capture the atmosphere and the view of your outing while keeping the location of the container a complete secret.</p>",
    "<strong>Pick up three pieces of litter while you are out on a hunt.</strong><p>Do a quick bit of Cache In, Trash Out to leave the environment just a little bit cleaner than you found it.</p>",
    "<strong>Log a genuinely thoughtful thank-you note to a cache owner online.</strong><p>Mention exactly what you appreciated about their work, whether it was the clever container, the lovely walk, or the clear description.</p>",
    "<strong>Find a cache with a title that makes you incredibly curious.</strong><p>Pick a listing based entirely on a quirky or mysterious name and see if the location lives up to the title.</p>",
    "<strong>Create a tiny, bespoke swag item to leave behind for someone else.</strong><p>Craft a little token, like a painted pebble, a miniature charm, or a small laminated card with a positive message.</p>",
    "<strong>Find a cache safely situated near a body of water.</strong><p>Enjoy a scenic stroll along a canal, riverbank, peaceful pond, lake, or a refreshing coastal path.</p>",
    "<strong>Find a cache near a tree, bench, or a perfectly quiet place to pause.</strong><p>Once the log is signed, take a proper minute to sit down, breathe, and simply look around at your surroundings.</p>",
    "<strong>Find a cache that requires a tiny bit of gentle problem-solving.</strong><p>Pick something that involves a simple clue, a quick observation challenge, or a basic coordinates check to make you feel clever.</p>",
    "<strong>Swap a piece of swag with absolute thoughtfulness.</strong><p>If you see something you want to take, ensure you leave behind something of equal or greater joy for the next person.</p>",
    "<strong>Find a cache hidden in a place you usually rush straight past.</strong><p>Slow down and explore a familiar street, local cut-through, or station area that you normally ignore.</p>",
    "<strong>Log a Did Not Find with absolute grace and honesty.</strong><p>Embrace the fact that missing out is part of the game, and share a helpful log for the owner without pretending you spotted it.</p>",
    "<strong>Assemble a miniature cache care kit to carry with you.</strong><p>Pop a spare pencil, tiny log strips, tweezers, and a bit of hand sanitiser into a small pouch so you are always prepared.</p>",
    "<strong>Find a cache that takes you somewhere unexpectedly lovely.</strong><p>Discover a hidden gem right under your nose, like a beautiful mural, a quiet churchyard, an old wall, or a secret lane.</p>",
    "<strong>Move a trackable along on its journey with genuine consideration.</strong><p>Take a moment to read its specific online mission and place it in a new location that genuinely helps it along the way.</p>"
];

const geocacheItems = Array.from(
    { length: 25 },
    (_, i) => ({
        id: `cache-${i + 1}`,
        number: i + 1,
        text: geocacheTexts[i],
        image: `images/cache-${i + 1}.png`
    })
);

document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
    });
});

async function loadProgress() {
    const { data, error } = await supabaseClient
        .from("bingo_progress")
        .select("*");

    if (error) {
        console.error("Could not load progress:", error);
        return [];
    }

    return data;
}

async function saveProgress(board, item, completed) {
    try {
        const { error } = await supabaseClient
            .from("bingo_progress")
            .upsert(
                {
                    board,
                    item,
                    completed,
                    updated_at: new Date().toISOString()
                },
                {
                    onConflict: "board,item"
                }
            );

        if (error) {
            console.error("Could not save progress:", error);
            showToast("That didn’t save. Check your connection and try again.");
        }
    } catch (error) {
        console.error("Could not save progress:", error);
        showToast("That didn’t save. Check your connection and try again.");
    }
}

let activeModalItem = null;
let activeModalBoard = null;
let activeModalSquare = null;
let activeModalCompleted = false;

function openMobileModal(board, item, square) {
    activeModalItem = item;
    activeModalBoard = board;
    activeModalSquare = square;
    activeModalCompleted = square.classList.contains(board === "pinnivity" ? "is-open" : "completed");

    renderMobileModal();

    document.getElementById("mobile-modal").classList.add("active");
    positionMobileModal();
}

function positionMobileModal() {
    const modal = document.getElementById("mobile-modal");
    if (!modal.classList.contains("active") || !activeModalSquare) return;

    const inner = modal.querySelector(".mobile-modal-inner");
    const title = activeModalSquare.closest(".tab-content")?.querySelector("h2");
    const viewport = modal.getBoundingClientRect();
    const preferredTop = title ? title.getBoundingClientRect().bottom - viewport.top + 8 : 28;
    const maxTop = Math.max(28, viewport.height - inner.getBoundingClientRect().height - 8);
    const top = Math.max(28, Math.min(preferredTop, maxTop));
    inner.style.setProperty("--modal-top", top + "px");
}

window.addEventListener("scroll", positionMobileModal, { passive: true });
window.addEventListener("resize", positionMobileModal);
window.visualViewport?.addEventListener("resize", positionMobileModal);

function renderMobileModal() {
    const card = document.getElementById("mobile-modal-card");

    card.innerHTML = "";
    card.classList.remove("pinnivity-modal-card", "pinnivity-modal-double", "is-open");
    card.removeAttribute("role");
    card.removeAttribute("tabindex");
    card.removeAttribute("aria-label");

    if (activeModalBoard === "pinnivity") {
        card.classList.remove("completed");
        card.classList.add("pinnivity-modal-card");
        card.classList.toggle("pinnivity-modal-double", activeModalSquare.classList.contains("pinnivity-door-double"));
        card.classList.toggle("is-open", activeModalCompleted);
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", (activeModalCompleted ? "Close" : "Open") + " door " + activeModalItem.number);
        ["--art-x", "--art-y", "--art-width"].forEach(name =>
            card.style.setProperty(name, activeModalSquare.style.getPropertyValue(name))
        );
        card.appendChild(activeModalSquare.querySelector(".pinnivity-flip").cloneNode(true));
        return;
    }

    card.classList.toggle("completed", activeModalCompleted);

    if (activeModalCompleted) {
        const image = document.createElement("img");
        image.src = activeModalItem.image;
        image.alt = activeModalItem.text;
        card.appendChild(image);
    } else {
        card.innerHTML = activeModalItem.text;
    }
}

async function toggleMobileModalCompletion() {
    if (activeModalBoard === "pinnivity" && !isPinnivityDoorAvailable(activeModalSquare)) {
        refreshPinnivityLocks();
        closeMobileModal();
        showToast(pinnivityLockedMessage(activeModalSquare));
        return;
    }
    activeModalCompleted = !activeModalCompleted;

    if (activeModalBoard === "pinnivity") {
        setPinnivityDoorState(activeModalSquare, activeModalCompleted);
        const card = document.getElementById("mobile-modal-card");
        card.classList.toggle("is-open", activeModalCompleted);
        card.setAttribute("aria-label", (activeModalCompleted ? "Close" : "Open") + " door " + activeModalItem.number);
        await savePinnivityProgress(activeModalSquare, activeModalCompleted);
        return;
    }

    activeModalSquare.classList.toggle("completed", activeModalCompleted);

    await saveProgress(
        activeModalBoard,
        activeModalItem.id,
        activeModalCompleted
    );

    renderMobileModal();
}

function closeMobileModal() {
    document.getElementById("mobile-modal").classList.remove("active");
}

function createGrid(containerId, board, items, savedProgress) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    items.forEach(item => {
        const square = document.createElement("div");
        square.className = "bingo-square";

        const textSpan = document.createElement("span");
        textSpan.className = "desktop-challenge-text";
        textSpan.innerHTML = item.text;

        const numberSpan = document.createElement("span");
        numberSpan.className = "mobile-number";
        numberSpan.textContent = item.number;

        const image = document.createElement("img");
        image.className = "completed-image";
        image.src = item.image;

        square.appendChild(image);
        square.appendChild(textSpan);
        square.appendChild(numberSpan);

        const savedItem = savedProgress.find(progress =>
            progress.board === board &&
            progress.item === item.id
        );

        if (savedItem?.completed) {
            square.classList.add("completed");
        }

        square.addEventListener("click", async () => {
            const isMobile = window.matchMedia("(max-width: 700px)").matches;
        
            if (isMobile) {
                openMobileModal(board, item, square);
                return;
            }
        
            square.classList.toggle("completed");
        
            const completed = square.classList.contains("completed");
        
            await saveProgress(board, item.id, completed);
        });

        container.appendChild(square);
    });
}

document.getElementById("mobile-modal-card").addEventListener("click", event => {
    event.stopPropagation();
    toggleMobileModalCompletion();
});

document.getElementById("mobile-modal").addEventListener("click", closeMobileModal);

async function initialisePage() {
    let savedProgress = [];
    try { savedProgress = (await loadProgress()) || []; }
    catch (error) { console.error("Could not load progress:", error); }

    createGrid("film-grid", "films", filmItems, savedProgress);
    createGrid("geocache-grid", "geocaching", geocacheItems, savedProgress);
    restorePinnivityProgress(savedProgress);
}

initialisePage();

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 4000);
}

window.addEventListener("online", () => {
    showToast("Connection restored.");
});

document
    .getElementById("mobile-modal-close")
    .addEventListener("click", event => {
        event.stopPropagation();
        closeMobileModal();
    });
    

// Pinnivity: use the same desktop / mobile interaction pattern as birthday bingo.
function setPinnivityDoorState(door, open) {
    door.classList.toggle("is-open", open);
    door.setAttribute("aria-pressed", String(open));
    door.setAttribute("aria-label", (open ? "Close" : "Open") + " door " + door.dataset.day);
}

const pinnivityGrid = document.getElementById("pinnivity-grid");
const pinnivityQA = document.getElementById("pinnivity-qa");
let pinnivityQAMode = "real";
let pinnivityQADate = "";

// Real progress uses the same database and upsert as Birthday Bingo.
// A separate year-specific board prevents collisions with other activities.
const PINNIVITY_BOARD = "pinnivity-2026";
const PINNIVITY_QA_STATE = "piniverse:pinnivity:2026:qa-progress";
const PINNIVITY_QA_SETTINGS = "piniverse:pinnivity:2026:qa-settings";
const pinnivityRealProgress = new Map();
const pinnivityTestProgress = new Map();
const pinnivityPendingSaves = new Map();
let pinnivityProgressReady = false;

function readPinnivityStorage(storage, key, fallback) {
    try { return JSON.parse(window[storage].getItem(key)) ?? fallback; }
    catch { return fallback; }
}

function writePinnivityStorage(storage, key, value) {
    try { window[storage].setItem(key, JSON.stringify(value)); }
    catch { showToast("Test progress could not be saved in this browser."); }
}

function isPinnivityTestMode() {
    return pinnivityQA?.dataset.enabled === "true" && pinnivityQAMode !== "real";
}

function pinnivityProgressMap() {
    return isPinnivityTestMode() ? pinnivityTestProgress : pinnivityRealProgress;
}

function restorePinnivityProgress(savedProgress) {
    pinnivityRealProgress.clear();
    for (const entry of savedProgress || []) {
        if (entry.board === PINNIVITY_BOARD && /^door-(?:[1-9]|1[0-9]|2[0-4])$/.test(entry.item)) {
            pinnivityRealProgress.set(entry.item.slice(5), entry.completed === true);
        }
    }
    pinnivityProgressReady = true;
    refreshPinnivityLocks();
}

function savePinnivityProgress(door, open) {
    const day = door.dataset.day;
    pinnivityProgressMap().set(day, open);
    if (isPinnivityTestMode()) {
        writePinnivityStorage("localStorage", PINNIVITY_QA_STATE, Object.fromEntries(pinnivityTestProgress));
        return Promise.resolve();
    }
    // Serialise writes for each door so rapid open/close taps save in order.
    const previous = pinnivityPendingSaves.get(day) || Promise.resolve();
    const next = previous.catch(() => {}).then(() => saveProgress(PINNIVITY_BOARD, "door-" + day, open));
    pinnivityPendingSaves.set(day, next);
    next.finally(() => {
        if (pinnivityPendingSaves.get(day) === next) pinnivityPendingSaves.delete(day);
    });
    return next;
}

function pinnivityUKDate(now = new Date()) {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit"
    }).formatToParts(now);
    const part = type => parts.find(p => p.type === type).value;
    return part("year") + "-" + part("month") + "-" + part("day");
}

function pinnivityUnlockedThrough(date) {
    if (date < "2026-12-01") return 0;
    if (date >= "2026-12-24") return 24;
    return Number(date.slice(8,10));
}

function pinnivityEffectiveDate() {
    return pinnivityQA?.dataset.enabled === "true" && pinnivityQAMode === "date"
        ? pinnivityQADate : pinnivityUKDate();
}

function pinnivityAvailableDay() {
    return pinnivityQA?.dataset.enabled === "true" && pinnivityQAMode === "all"
        ? 24 : pinnivityUnlockedThrough(pinnivityEffectiveDate());
}

function isPinnivityDoorAvailable(door) {
    return Number(door.dataset.day) <= pinnivityAvailableDay();
}

function pinnivityLockedMessage(door) {
    return "Door " + door.dataset.day + " opens on " + door.dataset.day + " December 2026.";
}

function refreshPinnivityLocks() {
    if (!pinnivityGrid) return;
    const available = pinnivityAvailableDay();
    pinnivityGrid.querySelectorAll("button[data-day]").forEach(door => {
        const locked = Number(door.dataset.day) > available;
        const open = !locked && pinnivityProgressMap().get(door.dataset.day) === true;
        setPinnivityDoorState(door, open);
        door.classList.toggle("is-locked", locked);
        door.setAttribute("aria-disabled", String(locked));
        if (locked) door.setAttribute("aria-label", pinnivityLockedMessage(door));
        else door.setAttribute("aria-label", (door.classList.contains("is-open") ? "Close" : "Open") + " door " + door.dataset.day);
    });
    if (activeModalBoard === "pinnivity" && activeModalSquare &&
        !isPinnivityDoorAvailable(activeModalSquare)) {
        closeMobileModal();
    }
    const status = document.getElementById("pinnivity-qa-status");
    if (status && pinnivityQA?.dataset.enabled === "true") {
        const mode = pinnivityQAMode === "all" ? "All doors unlocked" :
            (pinnivityQAMode === "date" ? "Simulated date: " : "Real UK date: ") + pinnivityEffectiveDate();
        const next = mode + " | " + available + " of 24 doors available";
        if (status.textContent !== next) status.textContent = next;
    }
}

function setupPinnivityQA() {
    if (!pinnivityQA || pinnivityQA.dataset.enabled !== "true") return;
    pinnivityQA.hidden = false;
    const date = document.getElementById("pinnivity-qa-date");
    const mode = document.getElementById("pinnivity-qa-mode");
    const settings = readPinnivityStorage("sessionStorage", PINNIVITY_QA_SETTINGS, {});
    const savedTestProgress = readPinnivityStorage("localStorage", PINNIVITY_QA_STATE, {});
    for (const [day, open] of Object.entries(savedTestProgress || {})) {
        if (/^(?:[1-9]|1[0-9]|2[0-4])$/.test(day)) pinnivityTestProgress.set(day, open === true);
    }
    date.value = typeof settings?.date === "string" ? settings.date : pinnivityUKDate();
    mode.value = ["real", "date", "all"].includes(settings?.mode) ? settings.mode : "real";
    if (!date.value || !date.validity.valid) {
        date.value = pinnivityUKDate();
        mode.value = "real";
    }
    function apply() {
        date.disabled = mode.value !== "date";
        if (mode.value === "date" && (!date.value || !date.validity.valid)) return;
        pinnivityQAMode = mode.value;
        pinnivityQADate = date.value;
        writePinnivityStorage("sessionStorage", PINNIVITY_QA_SETTINGS, { mode: pinnivityQAMode, date: pinnivityQADate });
        if (activeModalBoard === "pinnivity") closeMobileModal();
        refreshPinnivityLocks();
    }
    mode.addEventListener("change", apply);
    date.addEventListener("change", apply);
    document.getElementById("pinnivity-qa-reset").addEventListener("click", () => {
        mode.value = "real";
        date.value = pinnivityUKDate();
        apply();
    });
    apply();
}

if (pinnivityGrid && pinnivityGrid.dataset.interaction === "bingo") {
    setupPinnivityQA();
    refreshPinnivityLocks();
    window.setInterval(refreshPinnivityLocks, 30000);
    window.addEventListener("focus", refreshPinnivityLocks);
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) refreshPinnivityLocks();
    });
    pinnivityGrid.addEventListener("click", async event => {
        const door = event.target.closest("button[data-day]");
        if (!door) return;
        refreshPinnivityLocks();
        if (!isPinnivityDoorAvailable(door)) {
            showToast(pinnivityLockedMessage(door));
            return;
        }
        if (!isPinnivityTestMode() && !pinnivityProgressReady) {
            showToast("Loading your advent calendar. Try again in a moment.");
            return;
        }
        if (window.matchMedia("(max-width: 700px)").matches) {
            openMobileModal("pinnivity", { number: door.dataset.day }, door);
        } else {
            const open = !door.classList.contains("is-open");
            setPinnivityDoorState(door, open);
            await savePinnivityProgress(door, open);
        }
    });
    document.getElementById("mobile-modal-card").addEventListener("keydown", event => {
        if (activeModalBoard === "pinnivity" && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            toggleMobileModalCompletion();
        }
    });
    window.addEventListener("hashchange", () => {
        if (activeModalBoard === "pinnivity") closeMobileModal();
    });
    window.matchMedia("(max-width: 700px)").addEventListener("change", () => {
        if (activeModalBoard === "pinnivity") closeMobileModal();
    });
}
