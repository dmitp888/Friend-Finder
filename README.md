# Friend-Finder
A compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site  takes in results from  users' surveys, then compare their answers with those from other users. The app displays the name and picture of the user with the best overall match.
The survey  has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

Determining the user's most compatible friend using the following:

   * Converting each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, comparing the difference between current user's scores against those from other users, question by question. Adding up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * We are using the absolute value of the differences. 
   * The closest match will be the user with the least amount of difference.

Once  found the current user's most compatible friend a modal pop-ups with the result.
The modal  displays both the name and picture of the closest match.
