
// Asynchronous
console.log('Before..');
getuser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        gitCommits(repo, displayCommits);
    });
});

console.log('After..');

//The above code if in Synchronous
/*console.log('Before');
const user = getuser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');
*/

function displayCommits(commits){
    console.log(commits);
}

function getuser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from database..');
        callback({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling Github API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}