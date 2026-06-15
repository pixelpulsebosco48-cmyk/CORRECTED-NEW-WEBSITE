// Real-time preview update
function updatePreview() {
    const hook = document.getElementById('input-hook').value || 'Your headline will appear here';
    const link = document.getElementById('input-link').value || '#';
    
    const viewHook = document.getElementById('view-hook');
    const viewBtn = document.getElementById('view-cta-btn');
    
    if (viewHook) viewHook.innerText = hook;
    if (viewBtn) viewBtn.href = link;
}

// Generate magic link with share URL
function generateMagicLink() {
    const link = document.getElementById('input-link').value;
    const hook = document.getElementById('input-hook').value;
    
    // Basic validation
    if (!link || !hook) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidUrl(link)) {
        alert('Please enter a valid URL');
        return;
    }
    
    const baseUrl = window.location.origin + window.location.pathname.replace('tool.html', 'tool.html');
    const params = new URLSearchParams();
    params.append('mode', 'view');
    params.append('link', encodeURIComponent(link));
    params.append('hook', encodeURIComponent(hook));
    
    const shareUrl = `${baseUrl}?${params.toString()}`;
    document.getElementById('share-url').value = shareUrl;
    document.getElementById('output-area').style.display = 'block';
}

// Copy to clipboard with feedback
function copyToClipboard() {
    const shareUrl = document.getElementById('share-url');
    shareUrl.select();
    
    try {
        document.execCommand('copy');
        
        // Show success feedback
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = '✓ Copied!';
        btn.classList.add('copied');
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        alert('Copy failed, please copy manually');
    }
}

// URL validation
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Page load - check if in view mode
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    if (mode === 'view') {
        // Enter view mode
        document.body.classList.add('view-mode');
        
        // Decode and render preview content
        const hook = decodeURIComponent(urlParams.get('hook') || 'Your headline will appear here');
        const link = decodeURIComponent(urlParams.get('link') || '#');
        
        const viewHook = document.getElementById('view-hook');
        const viewBtn = document.getElementById('view-cta-btn');
        
        if (viewHook) viewHook.innerText = hook;
        if (viewBtn) {
            viewBtn.href = link;
            viewBtn.target = '_blank';
        }
    } else {
        // Edit mode - attach event listeners
        const inputLink = document.getElementById('input-link');
        const inputHook = document.getElementById('input-hook');
        
        if (inputLink) inputLink.addEventListener('input', updatePreview);
        if (inputHook) inputHook.addEventListener('input', updatePreview);
        
        // Initialize preview with defaults
        updatePreview();
    }
});

// Keyboard shortcut for generate (Cmd/Ctrl + Enter)
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        const mode = new URLSearchParams(window.location.search).get('mode');
        if (mode !== 'view') {
            generateMagicLink();
        }
    }
});
