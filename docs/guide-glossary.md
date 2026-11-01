# Glossary

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

A successful run prints nothing beyond the final line. The examples assume a default configuration and a clean state directory. This page is part of the harnessctl documentation set. The exported funciton takes one argument and returns a promise.

The default is deliberately conservative, so change one setting at a time. Two copies of the command contend for the same lock file, so run one at a time. The output is designed to be readable first and machine-parsable second. The maximum lenght is measured in bytes, not characters.

Both forms are accepted, so existing scripts do not need to be rewritten. When the cache is cold the first request takes noticeably longer. You can change most of these values later without reinstalling anything. The second column shows the effective vaule.

## Before you start

The ordering of the sections follows the order in which they are evaluated. This page is part of the harnessctl documentation set. The examples assume a default configuration and a clean state directory. Nothing is writen until the transaction commits.

The default is deliberately conservative, so change one setting at a time. The tool never writes outside the directory named on the command line. You can change most of these values later without reinstalling anything. The change is commited on a branch, never on the default branch.

