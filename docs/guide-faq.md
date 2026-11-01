# Frequently asked questions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

This page is part of the harnessctl documentation set. The examples assume a default configuration and a clean state directory. Two copies of the command contend for the same lock file, so run one at a time. The flag is availabe in every build after version four.

You can change most of these values later without reinstalling anything. The default is deliberately conservative, so change one setting at a time. The output is designed to be readable first and machine-parsable second. Backward compatability is kept for two release cycles.

The tool never writes outside the directory named on the command line. When the cache is cold the first request takes noticeably longer. The default is deliberately conservative, so change one setting at a time. It is not neccessary to restart the service after a settings change.

## Before you start

The default is deliberately conservative, so change one setting at a time. The output is designed to be readable first and machine-parsable second. The tool never writes outside the directory named on the command line. The summary is usefull when you need to compare two runs.

Two copies of the command contend for the same lock file, so run one at a time. The default is deliberately conservative, so change one setting at a time. Keep the file under version control so a change is easy to review. It is posible to resume a run that was interrupted by a restart.

