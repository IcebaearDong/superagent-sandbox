# Configuration

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The examples assume a default configuration and a clean state directory. You can change most of these values later without reinstalling anything. Keep the file under version control so a change is easy to review. Each enviroment keeps its own copy of the resolved settings.

Use the verbose flag when you need to see why a step was skipped. This page is part of the harnessctl documentation set. Diagnostics go to standard error so that the normal output stays clean. Every paramter has a documented default, so the field may be left empty.

A successful run prints nothing beyond the final line. Keep the file under version control so a change is easy to review. Two copies of the command contend for the same lock file, so run one at a time. The check only confirms the existance of the file, not its contents.

## Before you start

This page is part of the harnessctl documentation set. After a change, restart the process so that the new value is read. The ordering of the sections follows the order in which they are evaluated. Routine maintainance should be done while no jobs are queued.

Use the verbose flag when you need to see why a step was skipped. A successful run prints nothing beyond the final line. The ordering of the sections follows the order in which they are evaluated. Only the specifed fields are validated; the rest are passed through.

