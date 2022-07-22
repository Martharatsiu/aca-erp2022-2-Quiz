import React, {useState} from "react";
import Questions from "./COMPONENTS/Questions";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

const App = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore,setShowScore] = useState(false);
 
  const handleCorrectAnswer = (isCorrect: boolean) => {

    if(isCorrect)
    {
      setScore(score + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    if(currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);

    } else {
      setShowScore(true);
    }
  };

  return(
    <div className="app-wrapper">
    {showScore ? (
      <div> 
         <div className="score-section">
        You Were Able to Score :{score}/{Questions.length}
    </div>
      <div className="completed">
       <h3> Summary Of the Questions</h3>
       &nbsp;
    <p>Question 1: Git stands for “Global Information Tracker” it is a free and open source distributed version control system designed to manage everything from small to extremely large projects with speed and efficiency</p>
    &nbsp;
    <p>Question 2:
    git clone is primarily used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location. The original repository can be located on the local filesystem or on remote machine accessible supported protocols. The git clone command copies an existing Git repository.
    </p>
    &nbsp;
    <p>Question 3: The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit .</p>
    &nbsp;
    <p>Question 4:  The commit is made on your local repository. It must be pushed to remotes (repositories not on your computer) to be shared.</p>
    &nbsp;
    <p>Question 5: The git add command is used to add file contents to the Index (Staging Area). This command updates the current content of the working tree to the staging area. It also prepares the staged content for the next commit.</p>
    &nbsp;
    <p>Question 6: A GitHub fork is a copy of a repository (repo) that sits in your account rather than the account from which you forked the data from. Once you have forked a repo, you own your forked copy. This means that you can edit the contents of your forked repository without impacting the parent repo.</p>
    &nbsp;
    <p>Question 7: Since its birth in 2005, Git has evolved and matured to be easy to use and yet retain these initial qualities</p>
    &nbsp;
    <p>Question 8: Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development</p>
    &nbsp;
    <p>Question 9: GIT is very fast and GIT uses C language. C language makes this possible by reducing the overhead of runtimes associated with high-level languages and helping GIT to perform better.</p>
    &nbsp;
    <p>Question 10: git push is most commonly used to publish an upload local changes to a central repository. After a local repository has been modified a push is executed to share the modifications with remote team members.</p>
    &nbsp;
    <p>Question 11: Use rebase whenever you want to add changes of a base branch back to a branched out branch. Typically, you do this in feature branches whenever there's a change in the main branch.</p>
    &nbsp;
    <p>Question 12: Smart git, git-g and git Cola are clients of Git Linux</p>
    &nbsp;
    <p>Question 13: The git log command shows a list of all the commits made to a repository. You can see the hash of each Git commit , the message associated with each commit, and more metadata. This command is useful for displaying the history of a repository.</p>
    &nbsp;
    <p>Question 14: GitLab, Github,BitBucket are all Git repository hosting functions</p>
    &nbsp;
    <p>Question 15: Git is a distributed version control system known for its speed, workflow compatibility, and open source foundation. With Git, software teams can experiment without fearing that they'll create lasting damage to the source code. Teams using a Git repository can tackle projects of any size with efficiency and speed.</p>
    &nbsp;
    <p>Question 16: There're 3 scopes of configuration: local ( --local , default) global ( --global ) system ( --system )</p>
    &nbsp;
    <p>Question 17: How much did Microsoft buy git for?
$7.5 billion
GitLab grew up in GitHub's shadow — now it's worth twice what Microsoft paid for its chief rival. GitLab debuted on the Nasdaq on Thursday and is now worth $16.5 billion. Microsoft acquired its larger rival GitHub in 2018 for $7.5 billion, which at the time was a high-priced deal in subscription software.</p>
&nbsp;
    <p>Question 18: The git start command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository</p>
    &nbsp;
    <p>Question 19: Can you use Git with Notepad++?
Image result for notepad++ and git
Text Editor Configuration with Git

Now Open Gitbash and type Notepad++. It will return as command not found, hence exit from the Gitbash. The first step is to find out where your Notepad++ has installed in your system. Select the Notepad++ application and click on .exe file.</p>
&nbsp;
    <p>Question 20: What is a git ignore?
gitignore file is a text file that tells Git which files or folders to ignore in a project. A local . gitignore file is usually placed in the root directory of a project. You can also create a global . gitignore file and any entries in that file will be ignored in all of your Git repositories.</p>
&nbsp;
    <p>Question 21: There is no term such as git 'sterm" in Git</p>
    &nbsp;
    <p>Question 22: The git commit command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to.</p>
    &nbsp;
    <p>Question 23: There is no Git Roll command in Git</p>
    &nbsp;
    <p>Question 24: Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository (visible using git branch --remotes), and creates and checks out an initial branch that is forked from the cloned repository’s currently active branch.</p>
    &nbsp;
    <p>Question 25: Which command is used to download all the objects and references?
Command to download all the objects and references from a specified repository git config --list git help git fetch git log -n.</p>
&nbsp;
    <p>Question 26: Git has two data structures: a mutable index (also called stage or cache) that caches information about the working directory and the next revision to be committed; and an immutable, append-only object database. The index serves as a connection point between the object database and the working tree.</p>
    &nbsp;
    <p>Question 27: By default, the git log statement returns a full log entry for each commit made to a repository. You can retrieve a list of commit IDs and their associated commit messages using the –oneline flag. We can see the commit IDs and the first line of the messages associated with a commit</p>
    &nbsp;
    <p>Question 28: What is git log?
The git log command displays all of the commits in a repository's history. By default, the command displays each commit's</p>
&nbsp;
    <p>Question 29: What is a Git Bash?
Git Bash is an application for Microsoft Windows environments which provides an emulation layer for a Git command line experience. Bash is an acronym for Bourne Again Shell. A shell is a terminal application used to interface with an operating system through written commands</p>
&nbsp;
    <p>Question 30: The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository.</p>
    &nbsp;
    <p>Question 31: git add -A is equivalent to git add .; git add -u . The important point about git add . is that it looks at the working tree and adds all those paths to the staged changes if they are either changed or are new and not ignored, it does not stage any 'rm' actions.</p>
    &nbsp;
    <p>Question 32: How do I add a new remote to git?
To add a new remote, use the git remote add command on the terminal, in the directory your repository is stored at. The git remote add command takes two arguments: A unique remote name, for example, “my_awesome_new_remote_repo” A remote URL, which you can find on the Source sub-tab of your Git repo.</p>
&nbsp;
    <p>Question 33: The git pull command is used to fetch and download content from a remote repository and immediately update the local repository to match that content</p>
    &nbsp;
    <p>Question 34: The most common option used with git commit is the -m option. The -m stands for message. When calling git commit , it is required to include a message. The message should be a short description of the changes being committed. The message should be at the end of the command and it must be wrapped in quotations " "</p>
    &nbsp;
    <p>Question 35: The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit .</p>
    &nbsp;
    <p>Question 36: The git checkout command lets you navigate between the branches created by git branch. Checking out a branch updates the files in the working directory to match the version stored in that branch, and it tells Git to record all new commits on that branch.</p>
    &nbsp;
    <p>Question 37: The easiest way to switch branch on Git is to use the “git checkout” command and specify the name of the branch you want to switch to.</p>
    &nbsp;
    <p>Question 38: Which Command is used to show limited number of commits? git log -n Command is used to show limited number of commits.20 Jun 2022</p>
    &nbsp;
    <p>Question 39: To hard reset files to HEAD on Git, use the “git reset” command with the “–hard” option and specify the HEAD. The purpose of the “git reset” command is to move the current HEAD to the commit specified (in this case, the HEAD itself, one commit before HEAD and so on).</p>
    &nbsp;
    <p>Question 40: he Git stash list command will pull up a list of your repository's stashes. Git will display all of your stashes and a corresponding stash index. Now, if you wish to view the contents of a specific stash, you can run the Git stash show command followed by stash@ and the desired index.</p>
    &nbsp;
    <p>Question 41: The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.</p>
    &nbsp;
    <p>Question 42: User is not Git configuration scope</p>
    &nbsp;
    <p>Question 43: MicroSoft is the vendor acquired GitHub for $7.5 billion in June 2018</p>
    &nbsp;
    <p>Question 44: git stash list push is not valid with git stash command?</p>
    &nbsp;
    <p>Question 45: The git commit command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to.</p>
    &nbsp;
    <p>Question 46: The git init command creates a new Git repository.</p>
    &nbsp;
    <p>Question 47: What is a Gitignore?
gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo</p>
&nbsp;
    <p>Question 48: On Windows, if you use Git Bash the default editor will be Vim.</p>
    &nbsp;
    <p>Question 49: You can retrieve a list of commit IDs and their associated commit messages using the –oneline flag</p>
    &nbsp;
    <p>Question 50: commit author metadata, commit hash and commit date metadata Git log command contains following data</p>
      </div>
    
      <div className="end">
       <a href="/">
          <button>RESTART</button>
        </a>
    </div>
    </div>
    ) : (
      <div>
    <div className="question-section-wrapper">

    <div className="question-count">
      Question {currentQuestion + 1} of {Questions.length}
      </div>
      <div className="question">
      {Questions[currentQuestion].question}
      </div>
      </div>
      <div className="answer-section-wrapper">
        {Questions[currentQuestion].Answers.map((answerOption) => (
    <li className="answer-list" key={uuidv4()}>
      <button disabled={clicked}
      className={`answer-button ${
        clicked && answerOption.isCorrect ? "correct" : ""
      }`}
       onClick={() => handleCorrectAnswer(answerOption.isCorrect)}>{answerOption.answer}</button>
    </li>

        ))}
        </div>
        <div>

          <button className="next-button" onClick={handleNextQuestion}disabled={!clicked}>next</button>
      </div>
      </div>
  )}
  </div>
);
      };

export default App;