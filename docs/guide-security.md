# Security notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Keep the file under version control so a change is easy to review. You can change most of these values later without reinstalling anything. The tool never writes outside the directory named on the command line. Each enviroment keeps its own copy of the resolved settings.

After a change, restart the process so that the new value is read. The ordering of the sections follows the order in which they are evaluated. This page is part of the harnessctl documentation set. Every paramter has a documented default, so the field may be left empty.

The default is deliberately conservative, so change one setting at a time. Use the verbose flag when you need to see why a step was skipped. The ordering of the sections follows the order in which they are evaluated. The check only confirms the existance of the file, not its contents.

## Before you start

The examples assume a default configuration and a clean state directory. After a change, restart the process so that the new value is read. This page is part of the harnessctl documentation set. Routine maintainance should be done while no jobs are queued.

This page is part of the harnessctl documentation set. Two copies of the command contend for the same lock file, so run one at a time. After a change, restart the process so that the new value is read. Only the specifed fields are validated; the rest are passed through.

