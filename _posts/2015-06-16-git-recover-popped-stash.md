---
layout: post
title: "GIT Recover Popped Stash"
description: "Sometimes you need this"
category: [code]
tags: [code, git]
---
{% include JB/setup %}

# How To Recover Popped Git Stash

If you ever accidentally pop a stash and need to get it back you can use the following command:

    git fsck --no-reflog | awk '/dangling commit/ {print $3}'

Let's break this down:

    git fsck

This verifies the connectivity of the objects in git's database. when used with the **--no-dangling** option it will show objects that exist but are not reachable from any of the referenced nodes. If you've been working on a project for while this command can take a minute and can show many lines such as:

    dangling blob f566b350c38eb57b65f57e9345595b68cb267b9a
    dangling blob 422713302b7d6a8bf67bd8805787baec33ea731a
    dangling blob 43e73cb46b1a6d253c58ac0fcfca25c63f1d658c
    dangling commit fa67c74d56bb36f51afe0243e7272c40d33486ff
    dangling blob 1d681dda9fc534bc27ab8d6ec2222cf1727ffef6
    dangling blob 4aea92f1d5ca8aae13dcb48e68435502ead6863e
    dangling blob 9ceb5696536119cc96dc1458c55f5c7e5249c1db
    dangling blob d1eba665eadae21dc230a467bdbccc8349d71479


Here we're using the **--no-reflog** option which looks only for commits that have been removed from a ref, but are still in that corresponding reflog.

Since the dangling blobs are references to thing that were never committed or stashed, we are not really concerned with them so seeing what could be a massive list of blobs makes it harder to find the popped stash we may be looking for. Enter the use of **AWK**

### awk - linux
This is linux text processing syntax that allows us to manipulate the output of a command, in our case git.  Here were looking for the output string regex **/dangling commit/** thereby ignoring the dangling blobs.  We then pass the argument **{print $3}** which takes the 3rd part of each line and prints it, since we already know each line will start with "dangling commit".  However we could pass in {pring $0} which would then print with the whole line output, but that would be redundant.

### gitk

Using the graphical interface can sometimes be helpful at tracking down exactly what you're looking for.  This can get you out of git purgatory when you've been bouncing around multiple branches, stashes, commits and accidentally pop something.  Once you find the missing stash you can simply copy the sha-1 hash and do:

    git stash apply <your sha-1 hash>

and vioala! you've recovered your lost stash!  You may even want to used context menu in gitk to create branches for unreachable commits you may need.

### References

Thanks to these helpful resources!

http://stackoverflow.com/questions/89332/recover-dropped-stash-in-git

http://git-scm.com/docs/gitk

http://git-scm.com/book/en/v2/Git-Tools-Revision-Selection

[About awk](http://www.math.utah.edu/docs/info/gawk_3.html)

[Crazy advanced Git Reporting](http://travistidwell.com/blog/2014/06/11/fun-with-git-and-awk/)
