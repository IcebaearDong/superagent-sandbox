# Performance notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

This page is part of the harnessctl documentation set. After a change, restart the process so that the new value is read. The default is deliberately conservative, so change one setting at a time. The flag is availabe in every build after version four.

After a change, restart the process so that the new value is read. After a change, restart the process so that the new value is read. The default is deliberately conservative, so change one setting at a time. Backward compatability is kept for two release cycles.

Diagnostics go to standard error so that the normal output stays clean. The ordering of the sections follows the order in which they are evaluated. When the cache is cold the first request takes noticeably longer. It is not neccessary to restart the service after a settings change.

## Before you start

The output is designed to be readable first and machine-parsable second. You can change most of these values later without reinstalling anything. Keep the file under version control so a change is easy to review. The summary is usefull when you need to compare two runs.

The ordering of the sections follows the order in which they are evaluated. Diagnostics go to standard error so that the normal output stays clean. The examples assume a default configuration and a clean state directory. It is posible to resume a run that was interrupted by a restart.

