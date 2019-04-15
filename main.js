const BUBBLE_TEXT_MAPPING = {
    'bubble-1': 'First accent for communication and good mood',
    'bubble-2': 'Second accent for focus on project/product management',
    'bubble-3': 'Third accent for an eye on design',
    'bubble-4': 'On my free time I help as a project manager to my friends from Finecortex. They are mainly focused on UX and redesigns of web apps and mobile apps for different companies from USA.',
    'bubble-5': 'After the acquisition of Delivery Hero Germany by Takeaway, I joined their team with main focus on the loyalty shop and white-label sites.',
    'bubble-6': 'My main tasks were maintenance and development of new features through ab-tests for Lieferheld website (Backbone.js). However, I also helped Pizza.de (React.js + Redux.js) team with some features.',
    'bubble-7': 'I helped on the development of the different web apps that this startup had to provide telemedicine services. Unfortunately, it had to close down due to financial problems.',
    'bubble-8': 'I started in Accenture as an Android developer and helped different teams with various projects. However, my most important project was as frontend developer for SAPUI5 controls team',
    'bubble-9': 'I developed an Android app to find the nearest accessible places for people with limited physical abilities.'
};

function onBubbleClick(bubbleId) {
    this.event.stopImmediatePropagation();
    const contentBubble = document.getElementById('bubble-content');
    contentBubble.firstElementChild.innerHTML = BUBBLE_TEXT_MAPPING[bubbleId];
    if (contentBubble.classList.contains('hidden')) toggleContentBubbleVisibility();
}

function onContainerClick() {
    this.event.stopImmediatePropagation();
    const contentBubble = document.getElementById('bubble-content');
    if (!contentBubble.classList.contains('hidden')) toggleContentBubbleVisibility();
}

function toggleContentBubbleVisibility() {
    const contentBubble = document.getElementById('bubble-content');
    contentBubble.classList.toggle('hidden');
}
