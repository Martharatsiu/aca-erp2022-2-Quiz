const Questions = [
    {
        question: "What is the full form of GIT?",
        Answers: [
            {answer: "Gastro International Track", isCorrect:false},
            {answer: "Gastro Intestional Track", isCorrect:false},
            {answer: "Global Information Tracker", isCorrect:true},
            {answer: "None of these", isCorrect:false},
        ],
    },
    {
        question: "Which of the following git command that downloads your repository from GitHub to your computer? ",
        Answers: [
            {answer: "git fork", isCorrect:false},
            {answer: "git commit", isCorrect:false},
            {answer: "git clone", isCorrect:true},
            {answer: "git push", isCorrect:false},
        ],
    },
    {
        question: "Which of the following shortcut to staging all the changes you have? ",
        Answers: [
            {answer: "git push -am 'Message' ", isCorrect:false},
            {answer: "git add . ", isCorrect:true},
            {answer: "git commit add .", isCorrect:false},
            {answer: "git commit .", isCorrect:false},
        ],
    },
    {
        question: "Identify the correct commit syntax for all changes with a message?",
        Answers: [
            {answer: "git add -a 'Im coding'", isCorrect:false},
            {answer: "git commit -am 'I'm coding'", isCorrect:true},
            {answer: "git message -am 'I'm coding'", isCorrect:false},
            {answer: "None of these", isCorrect:false},
        ],
    },
    {
        question: "What comes first, staging with git add. or committing with git commit? ",
        Answers: [
            {answer: "Committing with git commit", isCorrect:false},
            {answer: "Staging your commits with git add", isCorrect:true},
            {answer: "None of these", isCorrect:false},
        ],
    },
    {
        question: "How do you create a copy of a lab under your own GitHub account so that you can solve the lab? ",
        Answers: [
            {answer: "Forking it via the GitHub interface.", isCorrect:true},
            {answer: "git clone", isCorrect:false},
            {answer: "git pull-request", isCorrect:false},
            {answer: "git fork", isCorrect:false},
        ],
    },
    {
        question: "GIT comes from ",
        Answers: [
            {answer: "2005", isCorrect:true},
            {answer: "2007", isCorrect:false},
            {answer: "2004", isCorrect:false},
            {answer: "2008", isCorrect:false},
        ],
    },
    {
        question: "Which of the following advantage of using GIT? ",
        Answers: [
            {answer: "Collaboration friendly", isCorrect:false},
            {answer: "Data redundancy and replication", isCorrect:false},
            {answer: "Data redundancy and replication", isCorrect:false},
            {answer: "All of the above", isCorrect:true},
        ],
    },
    {
        question: "Which of the language is used in GIT? ",
        Answers: [
            {answer: "C language", isCorrect:true},
            {answer: "HTML language", isCorrect:false},
            {answer: "C++ language", isCorrect:false},
            {answer: "None of these", isCorrect:false},
        ],
    },
    {
        question: "How do you add all the files in a subdirectory called ../project/experiment?",
        Answers: [
            {answer: "git add project/", isCorrect:false},
            {answer: "git add ../", isCorrect:false},
            {answer: "git add ../project/experiment/* ", isCorrect:true},
        ],
    },
    {
        question: "What is an alternative to merging in git? ",
        Answers: [
            {answer: "Basing", isCorrect:false},
            {answer: "Rebasing", isCorrect:true},
            {answer: "Both 1 and 2", isCorrect:false},
            {answer: "None of these", isCorrect:false},
        ],
    },
    {
        question: "Which of the following graphical GIT client for LINUX? ",
        Answers: [
            {answer: "Smart git", isCorrect:false},
            {answer: "Git Cola", isCorrect:false},
            {answer: "Git-g", isCorrect:false},
            {answer: "All of the above", isCorrect:true},
        ],
    },
    {
        question: "What is the use of ‘git log’? ",
        Answers: [
            {answer: "by author", isCorrect:true},
            {answer: "date", isCorrect:false},
            {answer: "content", isCorrect:false},
            {answer: "All of the above", isCorrect:false},
        ],
    },
    {
        question: "Which of the following Git repository hosting functions? ",
        Answers: [
            {answer: "Gitlab", isCorrect:false},
            {answer: "Github", isCorrect:false},
            {answer: "Bitbucket", isCorrect:false},
            {answer: "All of the above", isCorrect:true},
        ],
    },
    {
        question: "Git is a; ",
        Answers: [
            {answer: "Localized version control system ", isCorrect:false},
            {answer: "Distributed version control system ", isCorrect:true},
            {answer: "Centralized version control system ", isCorrect:false},
            {answer: "none ", isCorrect:false},
        ],
    },
    {
        question: "Which of the following isn't a Git configuration scope? ",
        Answers: [
            {answer: "User", isCorrect:false},
            {answer: "System", isCorrect:true},
            {answer: "Local", isCorrect:false},
            {answer: "Global", isCorrect:false},
        ],
    },
    {
        question: "Which of the following vendor acquired GitHub for $7.5 billion in June 2018?",
        Answers: [
            {answer: "IBM", isCorrect:false},
            {answer: "Microsoft", isCorrect:false},
            {answer: "Google", isCorrect:true},
            {answer: "Oracle", isCorrect:false},
        ],
    },
    {
        question: " Which command should you use to initialize a new Git repository? ",
        Answers: [
            {answer: "git init", isCorrect:false},
            {answer: "git install", isCorrect:false},
            {answer: "git start", isCorrect:true},
            {answer: "git bash", isCorrect:false},
        ],
    },
    {
        question: "What is the default text editor for the Bash shell with a Windows-based Git install? ",
        Answers: [
            {answer: "Bash", isCorrect:false},
            {answer: "Emacs", isCorrect:false},
            {answer: "Notepad++", isCorrect:true},
            {answer: "Vim", isCorrect:false},
        ],
    },
    {
        question: "Which of the following file you can configure to ensure that certain file types are never committed to the local Git repository?",
        Answers: [
            {answer: ".gitignore", isCorrect:false},
            {answer: "gitignore.txt", isCorrect:false},
            {answer: "git.ignore", isCorrect:true},
            {answer: "ignore.git", isCorrect:false},
        ],
    },
    {
        question: "Which of the following is not true in terms of git ",
        Answers: [
            {answer: "Staging area", isCorrect:false},
            {answer: "Fork", isCorrect:false},
            {answer: "Stem", isCorrect:true},
            {answer: "Push", isCorrect:false},
        ],
    },
    {
        question: " How do you save the current state of your code into the git version control? ",
        Answers: [
            {answer: "Using git stage", isCorrect:false},
            {answer: "Using git commit", isCorrect:true},
            {answer: "Using git push", isCorrect:false},
            {answer: "Using git add", isCorrect:false},
        ],
    },
    {
        question: "Which of the following is not a git command? ",
        Answers: [
            {answer: "git clean", isCorrect:false},
            {answer: "git clone", isCorrect:false},
            {answer: "git commit", isCorrect:false},
            {answer: "Git roll", isCorrect:true},
        ],
    },
    {
        question: "Which of these git client commands creates a copy of the repository? ",
        Answers: [
            {answer: "clone", isCorrect:true},
            {answer: "update", isCorrect:false},
            {answer: "import", isCorrect:false},
            {answer: "checkout", isCorrect:false},
        ],
    },
    {
        question: "command to download all the objects and references from a specific repository ",
        Answers: [
            {answer: "git log -n", isCorrect:false},
            {answer: "git fetch", isCorrect:false},
            {answer: "git help", isCorrect:false},
            {answer: "git config --list", isCorrect:true},
        ],
    },
    {
        question: "Which one of the following is not part of the data structure of a git repository? ",
        Answers: [
            {answer: "Head pointer", isCorrect:false},
            {answer: "Body element", isCorrect:true},
            {answer: "Commit object", isCorrect:false},
            {answer: "Branch pointer", isCorrect:false},
        ],
    },
    {
        question: "Command is useful for getting a high-level overview of the project history ",
        Answers: [
            {answer: "git rebase", isCorrect:false},
            {answer: "git reset --hard", isCorrect:false},
            {answer: "git log --author=''", isCorrect:false},
            {answer: "git log --oneline", isCorrect:true},
        ],
    },
    {
        question: "Which command is used to show limited number of commits? ",
        Answers: [
            {answer: "git fetch", isCorrect:false},
            {answer: "git config", isCorrect:false},
            {answer: "git log -n", isCorrect:true},
            {answer: "None of the above", isCorrect:false},
        ],
    },
    {
        question: "Command line environment is used for interacting with git ",
        Answers: [
            {answer: "Git Lab", isCorrect:false},
            {answer: "GitHub", isCorrect:false},
            {answer: "Git Boot", isCorrect:false},
            {answer: "Git Bash", isCorrect:true},
        ],
    },
    {
        question: "Which command creates an empty git repository in the specified directory? ",
        Answers: [
            {answer: "git init", isCorrect:true},
            {answer: "git reset", isCorrect:false},
            {answer: "git log ..", isCorrect:false},
            {answer: "None of the above", isCorrect:false},
        ],
    },
    {
        question: "Which of the following is true you when you use the following command?git add -A",
        Answers: [
            {answer: "All new and updated files are staged ", isCorrect:true},
            {answer: "Files are staged in alphabetical order. ", isCorrect:false},
            {answer: "All new files are staged ", isCorrect:false},
            {answer: "Only updated files are staged ", isCorrect:false},
        ],
    },
    {
        question: "What command lets you create a connection between a local and remote repository?",
        Answers: [
            {answer: "git remote add origin ", isCorrect:false},
            {answer: "git remote add new ", isCorrect:false},
            {answer: "git remote new origin", isCorrect:true},
            {answer: "git remote origin ", isCorrect:false},
        ],
    },
      {
        question: ".......... is equivalent to fetch and merge",
        Answers: [
            {answer: "pull", isCorrect:true},
            {answer: "syncronize ", isCorrect:false},
            {answer: "push", isCorrect:false},
            {answer: "fetch", isCorrect:false},
        ],
    },
      {
        question: "How do you supply a commit message to a commit?",
        Answers: [
            {answer: "Git message 'My first commit'", isCorrect:false},
            {answer: "Git add 'My first commit'", isCorrect:false},
            {answer: "Git commit 'My first commit'", isCorrect:false},
            {answer: "Git commit -m 'I'm coding!", isCorrect:true},
        ],
    },


    {
        question: "What's a shortcut to staging all the changes you have?",
        Answers: [
            {answer: "Git commit add . ", isCorrect:false},
            {answer: "Git commit . ", isCorrect:false},
            {answer: "Git add . ", isCorrect:true},
            {answer: "Git stage -a ", isCorrect:false},
        ],
    },
    {
        question: " Which of the following commands is used in switching between branches?",
        Answers: [
            {answer: "Git branch", isCorrect:false},
            {answer: "Git checkout ", isCorrect:true},
            {answer: "Git switch ", isCorrect:false},
            {answer: "Git merge ", isCorrect:false},
        ],
    },
    {
        question: "Which of the following commands will allow you to change branches?",
        Answers: [
            {answer: "git checkout ", isCorrect:true},
            {answer: "git clone", isCorrect:false},
            {answer: "git add ", isCorrect:false},
            {answer: "git commit ", isCorrect:false},
        ],
    },
    {
        question: "Which Command is used to show limited number of commits? ",
        Answers: [
            {answer: "git fetch <remote> ", isCorrect:false},
            {answer: "git log -n <limit> ", isCorrect:true},
            {answer: "git config <limit> ", isCorrect:false},
            {answer: "git status ", isCorrect:false},
        ],
    },
    {
        question: "Which file in a git repository specifies intentionally untracked files that git should ignore?",
        Answers: [
            {answer: ".git-exclude", isCorrect:false},
            {answer: ".gitexclude", isCorrect:false},
            {answer: ".gitignore", isCorrect:true},
            {answer: ".git-ignore ", isCorrect:false},
        ],
    },
    {
        question: "Which of the following git command can be used to check the stored stashes?",
        Answers: [
            {answer: " git stash ", isCorrect:false},
            {answer: "git stash map", isCorrect:false},
            {answer: "git stash set", isCorrect:false},
            {answer: "git stash list ", isCorrect:true},
        ],
    },
    {
        question: "Command to check the created, modified, deleted files in gitbash before Commit?",
        Answers: [
            {answer: "git show ", isCorrect:false},
            {answer: "git log ", isCorrect:false},
            {answer: "git status ", isCorrect:true},
            {answer: "all of the above ", isCorrect:false},
        ],
    },
    {
        question: "Which of the following is not a Git configuration scope? ",
        Answers: [
            {answer: "Local ", isCorrect:false},
            {answer: "User ", isCorrect:true},
            {answer: "System ", isCorrect:false},
            {answer: "Global ", isCorrect:false},
        ],
    },

    {
        question: "Which vendor acquired GitHub for $7.5 billion in June 2018?",
        Answers: [
            {answer: "Oracle ", isCorrect:false},
            {answer: "Microsoft ", isCorrect:true},
            {answer: "IBM ", isCorrect:false},
            {answer: "Google ", isCorrect:false},
        ],
    },
    
    {
        question: "Which of the following option is not valid with git stash command? ",
        Answers: [
            {answer: "git stash list pop", isCorrect:false},
            {answer: "git stash list clear", isCorrect:false},
            {answer: "git stash list push ", isCorrect:true},
            {answer: "git stash changes ", isCorrect:false},
        ],
    },
    {
        question: "______ removes untracked files to from your working directory.",
        Answers: [
            {answer: "git commit", isCorrect:false},
            {answer: "git clean", isCorrect:true},
            {answer: "git reset", isCorrect:false},
            {answer: "git clean -f", isCorrect:false},
        ],
    },
    {
        question: "Which command should you use to initialize a new git repository?",
        Answers: [
            {answer: "Git bash ", isCorrect:false},
            {answer: "Git install ", isCorrect:false},
            {answer: "Git init ", isCorrect:true},
            {answer: "Git start ", isCorrect:false},
        ],
    },
    {
        question: "Which file can you configure to ensure that certain files are never committed to the local Git repository? ",
        Answers: [
            {answer: "Ignore.git ", isCorrect:false},
            {answer: ".gitignore", isCorrect:true},
            {answer: "gitignore.txt ", isCorrect:false},
            {answer: "git.ignore ", isCorrect:false},
        ],
    },
    {
        question: "Which is the following is the default text editor for the Bash shell with a Windows-based Git install?",
        Answers: [
            {answer: "Bash ", isCorrect:false},
            {answer: "Vim", isCorrect:true},
            {answer: "Emacs ", isCorrect:false},
            {answer: "Notepad++ ", isCorrect:false},
        ],
    },
    {
        question: "git log --oneline command will display: ",
        Answers: [
            {answer: "the first seven characters of the SHA ", isCorrect:false},
            {answer: "one commit per line ", isCorrect:false},
            {answer: "the commit message", isCorrect:false},
            {answer: " Only A, B & C", isCorrect:true},
        ],
    },
    {
        question: "Git log command contains following data:",
        Answers: [
            {answer: "commit date metadata ", isCorrect:false},
            {answer: "commit hash", isCorrect:false},
            {answer: "commit author metadata", isCorrect:false},
            {answer: "All of the above ", isCorrect:true},
        ],
    },
]

export default Questions;