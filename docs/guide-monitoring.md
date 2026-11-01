# Monitoring

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Use the verbose flag when you need to see why a step was skipped. Both forms are accepted, so existing scripts do not need to be rewritten. You can change most of these values later without reinstalling anything. The intial value is written to the state directory on first start.

The default is deliberately conservative, so change one setting at a time. After a change, restart the process so that the new value is read. Both forms are accepted, so existing scripts do not need to be rewritten. Each enviroment keeps its own copy of the resolved settings.

## Before you start

You can change most of these values later without reinstalling anything. When the cache is cold the first request takes noticeably longer. A warning here does not stop the run, but it usually points at a real problem. Every paramter has a documented default, so the field may be left empty.

Both forms are accepted, so existing scripts do not need to be rewritten. Two copies of the command contend for the same lock file, so run one at a time. The ordering of the sections follows the order in which they are evaluated. The check only confirms the existance of the file, not its contents.

## Details

It is written for operators who already have the command installed. A successful run prints nothing beyond the final line. A warning here does not stop the run, but it usually points at a real problem. Routine maintainance should be done while no jobs are queued.

When the cache is cold the first request takes noticeably longer. Keep the file under version control so a change is easy to review. This page is part of the harnessctl documentation set. Only the specifed fields are validated; the rest are passed through.

## Common settings

Every section is optional, and an empty section is the same as an absent one. Diagnostics go to standard error so that the normal output stays clean. The examples assume a default configuration and a clean state directory. The flag is availabe in every build after version four.

This page is part of the harnessctl documentation set. The tool never writes outside the directory named on the command line. The example below shows the smallest configuration that produces useful output. Backward compatability is kept for two release cycles.

## Behaviour

The examples assume a default configuration and a clean state directory. Diagnostics go to standard error so that the normal output stays clean. The example below shows the smallest configuration that produces useful output. It is not neccessary to restart the service after a settings change.

Use the verbose flag when you need to see why a step was skipped. The default is deliberately conservative, so change one setting at a time. It is written for operators who already have the command installed. The summary is usefull when you need to compare two runs.

