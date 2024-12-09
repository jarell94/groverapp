// Function to show specific tabs
function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Show the selected tab
  const activeTab = document.getElementById(tabId);
  activeTab.classList.add('active');
}

// Toggle profile privacy
function togglePrivacy() {
  const privacyButton = document.querySelector('#profile button');
  const isPrivate = privacyButton.textContent.includes('Private');
  privacyButton.textContent = isPrivate ? 'Make Profile Private' : 'Make Profile Public';
  alert(`Your profile is now ${isPrivate ? 'public' : 'private'}.`);
}

// Example: Populate feed dynamically
function populateFeed() {
  const contentFeed = document.getElementById('contentFeed');
  const examplePosts = [
    { author: 'Alice', content: 'Check out my new photo!' },
    { author: 'Bob', content: 'Loving the new track I uploaded!' },
    { author: 'Eve', content: 'Here’s a sneak peek of my latest video.' },
  ];

  examplePosts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.style.padding = '10px';
    postDiv.style.borderBottom = '1px solid #fff';
    postDiv.innerHTML = `<strong>${post.author}</strong>: ${post.content}`;
    contentFeed.appendChild(postDiv);
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Default tab to show
  showTab('profile');
  populateFeed();
});
