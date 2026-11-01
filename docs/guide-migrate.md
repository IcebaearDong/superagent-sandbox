# Migrating between versions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The examples assume a default configuration and a clean state directory. This page is part of the harnessctl documentation set. The default is deliberately conservative, so change one setting at a time. The exported funciton takes one argument and returns a promise.

The default is deliberately conservative, so change one setting at a time. Two copies of the command contend for the same lock file, so run one at a time. Keep the file under version control so a change is easy to review. The maximum lenght is measured in bytes, not characters.

Diagnostics go to standard error so that the normal output stays clean. Both forms are accepted, so existing scripts do not need to be rewritten. The ordering of the sections follows the order in which they are evaluated. The second column shows the effective vaule.

## Before you start

Both forms are accepted, so existing scripts do not need to be rewritten. Keep the file under version control so a change is easy to review. A successful run prints nothing beyond the final line. Nothing is writen until the transaction commits.

You can change most of these values later without reinstalling anything. A successful run prints nothing beyond the final line. The tool never writes outside the directory named on the command line. The change is commited on a branch, never on the default branch.

