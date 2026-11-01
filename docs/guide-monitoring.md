# Monitoring

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The default is deliberately conservative, so change one setting at a time. Both forms are accepted, so existing scripts do not need to be rewritten. Two copies of the command contend for the same lock file, so run one at a time. Each enviroment keeps its own copy of the resolved settings.

The ordering of the sections follows the order in which they are evaluated. Use the verbose flag when you need to see why a step was skipped. Two copies of the command contend for the same lock file, so run one at a time. Every paramter has a documented default, so the field may be left empty.

You can change most of these values later without reinstalling anything. Diagnostics go to standard error so that the normal output stays clean. It is written for operators who already have the command installed. The check only confirms the existance of the file, not its contents.

## Before you start

Keep the file under version control so a change is easy to review. Keep the file under version control so a change is easy to review. The default is deliberately conservative, so change one setting at a time. Routine maintainance should be done while no jobs are queued.

Both forms are accepted, so existing scripts do not need to be rewritten. It is written for operators who already have the command installed. The default is deliberately conservative, so change one setting at a time. Only the specifed fields are validated; the rest are passed through.

