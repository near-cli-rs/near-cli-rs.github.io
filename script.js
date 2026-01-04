// Installation tabs functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.install-tab');
    const panes = document.querySelectorAll('.install-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Copy to clipboard functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const text = btn.dataset.copy;
            try {
                await navigator.clipboard.writeText(text);
                btn.classList.add('copied');
                setTimeout(() => btn.classList.remove('copied'), 2000);
            } catch (err) {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                btn.classList.add('copied');
                setTimeout(() => btn.classList.remove('copied'), 2000);
            }
        });
    });

    // Initialize terminal demo animation
    initTerminalDemo();
});

// Terminal demo animation
function initTerminalDemo() {
    const terminal = document.getElementById('terminal-demo');
    if (!terminal) return;

    const sequences = [
        {
            title: 'Interactive Mode',
            lines: [
                { type: 'command', text: '$ near', delay: 500 },
                { type: 'empty', delay: 300 },
                { type: 'prompt', text: '◆ What are you up to?', delay: 100 },
                { type: 'option-selected', text: '  ● account     - Manage accounts', delay: 80 },
                { type: 'option', text: '  ○ tokens      - Manage token assets such as NEAR, FT, NFT', delay: 60 },
                { type: 'option', text: '  ○ staking     - Manage staking: view, add and withdraw stake', delay: 60 },
                { type: 'option', text: '  ○ contract    - Manage smart-contracts: deploy code, call functions', delay: 60 },
                { type: 'option', text: '  ○ transaction - Operate transactions', delay: 60 },
                { type: 'hint', text: '  [↑↓ to move, enter to select, type to filter]', delay: 200 },
            ]
        },
        {
            title: 'Account Management',
            lines: [
                { type: 'command', text: '$ near account', delay: 500 },
                { type: 'empty', delay: 300 },
                { type: 'prompt', text: '◆ What do you want to do with an account?', delay: 100 },
                { type: 'option-selected', text: '  ● view-account-summary  - View properties for an account', delay: 80 },
                { type: 'option', text: '  ○ import-account        - Import existing account', delay: 60 },
                { type: 'option', text: '  ○ export-account        - Export existing account', delay: 60 },
                { type: 'option', text: '  ○ create-account        - Create a new account', delay: 60 },
                { type: 'option', text: '  ○ delete-account        - Delete an account', delay: 60 },
                { type: 'option', text: '  ○ list-keys             - View access keys', delay: 60 },
                { type: 'hint', text: '  [↑↓ to move, enter to select, type to filter]', delay: 200 },
            ]
        },
        {
            title: 'Smart Contracts',
            lines: [
                { type: 'command', text: '$ near contract', delay: 500 },
                { type: 'empty', delay: 300 },
                { type: 'prompt', text: '◆ Choose a contract action:', delay: 100 },
                { type: 'option-selected', text: '  ● call-function    - Execute function (contract method)', delay: 80 },
                { type: 'option', text: '  ○ deploy           - Deploy WASM code', delay: 60 },
                { type: 'option', text: '  ○ inspect          - Get a list of available function names', delay: 60 },
                { type: 'option', text: '  ○ verify           - Verify contract compliance', delay: 60 },
                { type: 'option', text: '  ○ download-wasm    - Download wasm', delay: 60 },
                { type: 'option', text: '  ○ view-storage     - View contract storage state', delay: 60 },
                { type: 'hint', text: '  [↑↓ to move, enter to select, type to filter]', delay: 200 },
            ]
        },
        {
            title: 'Token Operations',
            lines: [
                { type: 'command', text: '$ near tokens alice.near', delay: 500 },
                { type: 'empty', delay: 300 },
                { type: 'prompt', text: '◆ What do you want to do with tokens?', delay: 100 },
                { type: 'option-selected', text: '  ● send-near          - Transfer NEAR tokens', delay: 80 },
                { type: 'option', text: '  ○ send-ft            - Transfer fungible tokens', delay: 60 },
                { type: 'option', text: '  ○ send-nft           - Transfer NFT tokens', delay: 60 },
                { type: 'option', text: '  ○ view-near-balance  - View NEAR balance', delay: 60 },
                { type: 'option', text: '  ○ view-ft-balance    - View FT balance', delay: 60 },
                { type: 'option', text: '  ○ view-nft-assets    - View NFT assets', delay: 60 },
                { type: 'hint', text: '  [↑↓ to move, enter to select, type to filter]', delay: 200 },
            ]
        }
    ];

    let currentSequence = 0;

    async function runSequence(sequence) {
        terminal.innerHTML = '';

        for (const line of sequence.lines) {
            await delay(line.delay);
            appendLine(line);
        }

        // Wait before showing next sequence
        await delay(3000);
    }

    function appendLine(line) {
        const div = document.createElement('div');
        div.className = 'terminal-line';

        switch (line.type) {
            case 'command':
                div.innerHTML = `<span class="terminal-prompt">$</span> <span class="terminal-command">${escapeHtml(line.text.slice(2))}</span><span class="terminal-cursor"></span>`;
                break;
            case 'empty':
                div.innerHTML = '&nbsp;';
                break;
            case 'prompt':
                div.innerHTML = `<span class="terminal-highlight">◆</span> <span class="terminal-output">${escapeHtml(line.text.slice(2))}</span>`;
                break;
            case 'option-selected':
                div.innerHTML = `<span class="terminal-dim">│</span> <span class="terminal-highlight">●</span> <span class="terminal-output">${escapeHtml(line.text.slice(4))}</span>`;
                break;
            case 'option':
                div.innerHTML = `<span class="terminal-dim">│</span> <span class="terminal-dim">○</span> <span class="terminal-dim">${escapeHtml(line.text.slice(4))}</span>`;
                break;
            case 'hint':
                div.innerHTML = `<span class="terminal-dim">│</span> <span style="color: #c9a227;">${escapeHtml(line.text.slice(2))}</span>`;
                break;
            default:
                div.textContent = line.text;
        }

        terminal.appendChild(div);

        // Remove cursor from previous command line
        const cursors = terminal.querySelectorAll('.terminal-cursor');
        if (cursors.length > 1) {
            cursors[0].remove();
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    async function runLoop() {
        while (true) {
            await runSequence(sequences[currentSequence]);
            currentSequence = (currentSequence + 1) % sequences.length;
        }
    }

    // Start the animation loop
    runLoop();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect to mini-terminals
document.querySelectorAll('.term-option').forEach(option => {
    option.addEventListener('mouseenter', function() {
        const parent = this.closest('.term-options');
        if (!parent) return;

        parent.querySelectorAll('.term-option').forEach(opt => {
            opt.classList.remove('selected');
            const radio = opt.querySelector('.radio');
            if (radio) radio.classList.remove('filled');
        });

        this.classList.add('selected');
        const radio = this.querySelector('.radio');
        if (radio) radio.classList.add('filled');
    });
});

// Reset mini-terminal on mouse leave
document.querySelectorAll('.mini-terminal').forEach(terminal => {
    terminal.addEventListener('mouseleave', function() {
        const options = this.querySelectorAll('.term-option');
        options.forEach((opt, index) => {
            if (index === 0) {
                opt.classList.add('selected');
                const radio = opt.querySelector('.radio');
                if (radio) radio.classList.add('filled');
            } else {
                opt.classList.remove('selected');
                const radio = opt.querySelector('.radio');
                if (radio) radio.classList.remove('filled');
            }
        });
    });
});
