/* ============================================================
   NeuroShell — components.js
   Component detail modal (home page "Learn more" abstracts)
   ============================================================ */
(function () {
  "use strict";

  var EN_DASH = "\u2013";

  var COMPONENTS = {
    intent: {
      badge: "01",
      badgeClass: "badge--blue",
      title: "Intent Engine",
      author: "Karunarathna P.M.T.L",
      paragraphs: [
        "Large language models (LLMs) are increasingly used to translate natural-language security requests into machine-executable actions. Their stochastic outputs, however, can contain malformed structures, hallucinated parameters, out-of-scope targets and adversarial content, creating safety risks when connected to automated security tools. This thesis presents the Intent Recognition Engine (IRE), a component of the NeuroShell framework that converts free-form instructions for four security tools (Nmap, Gobuster, Nikto and Nuclei) into validated intent contracts. The IRE combines an offline, CPU-based language model with a multi-stage pipeline and deterministic validation, so that invalid or unsafe outputs are rejected before downstream processing.",
        "The engine was evaluated on 1,500 records using two offline backends, Gemma and Qwen, with ablation testing to isolate individual layers. Relative to unguarded model output, the guarded pipeline raised decision accuracy from 78% to 86% (Gemma) and from 69% to 82% (Qwen), raised the flawed-input catch rate from 0% to 72% and 64%, and reduced the false-positive rate from 32% to 14% and from 31% to 15%. The deterministic validation stack was the dominant contributor to safety: removing it lowered catch by 30 and 24 percentage points. Catch was strongest for flaw classes with a decidable signal (78" + EN_DASH + "100%) and weakest for contradictory, out-of-scope and ambiguous requests (40" + EN_DASH + "59%).",
        "These findings indicate that small, locally deployed language models can support safer security-copilot workflows when constrained by deterministic validation and a closed trust boundary. All results are single-run point estimates obtained on one CPU-only machine, which limits cross-platform generalisation. Future work should improve protection of the semantic classes, extend tool support, and validate the framework in operational settings."
      ],
      keywords: "Intent Recognition, LLM Guardrails, Hallucination Detection, Offline Language Models, Security Copilots"
    },
    planner: {
      badge: "02",
      badgeClass: "badge--teal",
      title: "Dynamic Planner & RAG Engine",
      author: "Herath H.M.C.H.K",
      paragraphs: [
        "This research developed the Dynamic Planner and Retrieval-Augmented Generation Engine as Component 2 of NeuroShell. The component converts structured cybersecurity intents into commands for Nmap, Nikto, and Gobuster. It combines intent interpretation, tool selection, documentation retrieval, model-assisted command synthesis, and validation before passing a planning response to the execution component.",
        "A Design Science Research approach guided the development and evaluation. Command examples were prepared from a 9,391-record candidate pool, with a final supervised dataset of 2,704 training, 338 validation, and 337 test pairs. Direct evaluation compared the Gemma 2 2B instruction model with its trained LoRA adapter enabled and disabled. The adapted configuration achieved 295 exact matches out of 337 predictions, an exact-match rate of 87.54%, and selected the requested tool in every assessed prediction. Exact-match rates varied by tool: 67.26% for Nmap, 98.28% for Nikto, and 97.22% for Gobuster. The base configuration achieved no strict exact matches, a result influenced by response formatting as well as command differences.",
        "A separate 25-case base-model ablation recorded semantic command accuracy of 56% without retrieval and 84% with retrieval. Average planning latency increased from 12.03 to 21.75 seconds in that experiment. The selected backend verification run passed all 42 tests, covering API behaviour, command validation, safety filtering, intent interpretation, and semantic evaluation. These experiments assess different configurations and do not form a single end-to-end accuracy result.",
        "The contribution is an implemented planning service with explicit task contracts, documentation grounding, and checks on generated commands. The evidence supports its use as a bounded research prototype. Reference inconsistencies, uneven task coverage, unmeasured final-model semantic accuracy, and the absence of user trials limit broader conclusions. Further work should improve dataset auditing, assess deployment parity, and evaluate the complete authorised workflow."
      ],
      keywords: "command synthesis, retrieval-augmented generation, cybersecurity, structured intent, command validation"
    },
    executor: {
      badge: "03",
      badgeClass: "badge--emerald",
      title: "Adaptive Executor",
      author: "Umayanga H.L.A",
      paragraphs: [
        "Security testers use a long list of command-line tools on Kali Linux, such as nmap, gobuster, hydra and sqlmap. The problem is that these tools fail very often. A tool may not be installed, a permission may be missing, a target may be unreachable, or a command may have a wrong flag. When this happens, the automated scan simply stops and waits. Even the newer AI tools like PentestGPT, VulnBot and xOffense do the same thing: they show the error to the user and give up. A human then has to read the error, fix the command, and start again. This is the main reason security scans cannot run on their own from start to finish.",
        "This dissertation builds and tests a system that solves this problem. It is called the Adaptive Execution and Error-Recovery Engine, or AEERE, and it is Component 3 of the NeuroShell project. The idea is simple. Every command runs inside a Docker container with Kali Linux, so nothing can harm the real computer. If the command fails, the engine reads the error, works out what went wrong, fixes the command, and tries again, all by itself. To work out what went wrong, it uses three steps one after another: a fast pattern check, a text-similarity check, and finally a local AI model (Gemma, run through Ollama) that reasons about the error. Before any fixed command is allowed to run, it must pass three safety checks. Because the AI runs on the same computer, no command or error or target is ever sent to the internet.",
        "The engine was tested on a dataset I built of 8,000 real failure cases. These cover ten kinds of errors, more than eighteen tools, and three difficulty levels. The tests measure how often the engine fixes the error, how accurately it labels the error type, how fast it is, how much computer power it uses, and whether it ever lets a dangerous command through. The full engine is compared against two simpler methods. The targets are a fix rate of at least 80%, an error-labelling score above 90%, a full fix attempt within ten seconds, and zero dangerous commands getting through."
      ],
      keywords: "error recovery; local AI language model; automated penetration testing; self-healing system; Kali Linux; command fixing; sandboxed execution."
    },
    triage: {
      badge: "04",
      badgeClass: "badge--amber",
      title: "Vulnerability Triage Engine",
      author: "Sahan H.P.T",
      paragraphs: [
        "Automated cybersecurity assessment tools generate extensive vulnerability information that often requires manual interpretation and prioritisation. Traditional severity-based assessment approaches, particularly those relying on the Common Vulnerability Scoring System (CVSS), do not independently establish whether a vulnerability has been exploited in real-world environments. This highlights the need for intelligent vulnerability analysis mechanisms that combine vulnerability intelligence with machine learning-based risk assessment.",
        "This research presents the design, implementation, and evaluation of an AI-Driven Vulnerability Analysis Engine (AVAE), developed as an individual component of NeuroShell, an autonomous natural language-driven cybersecurity orchestration framework. The engine processes security assessment outputs, extracts information about discovered hosts, services, and vulnerabilities, and supports automated vulnerability prioritisation. An XGBoost classifier was developed using five vulnerability intelligence features: CVSS v3 score, Exploit Prediction Scoring System (EPSS) score, EPSS percentile, vulnerability age, and an engineered CVSS" + EN_DASH + "EPSS interaction feature. Information from the CISA Known Exploited Vulnerabilities (KEV) catalogue was used to define the supervised classification target.",
        "The implemented solution integrates scanner-output parsing, vulnerability intelligence enrichment, machine learning-based classification, explainability using SHapley Additive exPlanations (SHAP), contextual risk prioritisation, and Neo4j graph-based data persistence. A FastAPI interface enables structured communication between the analysis engine and other components of the NeuroShell framework. The classifier was evaluated using precision, recall, F1-score, Receiver Operating Characteristic Area Under the Curve (ROC-AUC), and Precision" + EN_DASH + "Recall Area Under the Curve (PR-AUC)."
      ],
      keywords: "Vulnerability Exploitability Prediction, XGBoost, Vulnerability Prioritisation, Cybersecurity Automation"
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    initComponentModal();
  });

  function initComponentModal() {
    var triggers = document.querySelectorAll("[data-component]");
    var modal = document.getElementById("component-modal");
    if (!triggers.length || !modal) return;

    var badgeEl = modal.querySelector("[data-modal-badge]");
    var titleEl = modal.querySelector("[data-modal-title]");
    var authorEl = modal.querySelector("[data-modal-author]");
    var bodyEl = modal.querySelector("[data-modal-body]");
    var closeBtn = modal.querySelector(".component-modal__close");
    var lastFocused = null;

    function open(key) {
      var data = COMPONENTS[key];
      if (!data) return;

      lastFocused = document.activeElement;
      badgeEl.textContent = data.badge;
      badgeEl.className = "component-modal__badge " + data.badgeClass;
      titleEl.textContent = data.title;
      authorEl.textContent = data.author;

      bodyEl.textContent = "";
      data.paragraphs.forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        bodyEl.appendChild(p);
      });

      if (data.keywords) {
        var kw = document.createElement("p");
        kw.className = "component-modal__keywords";
        var strong = document.createElement("strong");
        strong.textContent = "Keywords: ";
        kw.appendChild(strong);
        kw.appendChild(document.createTextNode(data.keywords));
        bodyEl.appendChild(kw);
      }

      modal.hidden = false;
      document.body.classList.add("modal-open");
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        open(trigger.getAttribute("data-component"));
      });
    });

    modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-modal-close")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) close();
    });
  }
})();
