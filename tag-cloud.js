const skillTagDataList = [
    { name: 'Nginx, npm, Nexus OSS', weight: 1 },
    { name: 'Highcharts', weight: 5 },
    { name: 'Java', weight: 6 },
    { name: 'SQL Server', weight: 4 },
    { name: 'Angular', weight: 9 },
    { name: 'Grid, FlexBox', weight: 6 },
    { name: 'API, REST, WS, SSE', weight: 2 },
    { name: 'HTML, CSS', weight: 8 },
    { name: 'JavaScript', weight: 3 },
    { name: 'Typescript', weight: 7 },
    { name: 'GIT, SVN, Scrum', weight: 1 },
    // Add more tags here...
];


const tagCloudContainer = document.getElementById('tag-cloud');

skillTagDataList.forEach(tag => {
    const tagListElement = document.createElement('li');
    const tagAnchorElement = document.createElement('a');
    tagAnchorElement.textContent = tag.name;
    tagAnchorElement.setAttribute('data-weight',tag.weight);
    tagAnchorElement.setAttribute('href','');
    tagListElement.appendChild(tagAnchorElement);
    tagCloudContainer.appendChild(tagListElement);
});
