# Compatibility matrix

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

It is written for operators who already have the command installed. This page is part of the harnessctl documentation set. Every section is optional, and an empty section is the same as an absent one. The worker will recieve the record before it acknowledges the request.

When the cache is cold the first request takes noticeably longer. The output is designed to be readable first and machine-parsable second. The second column shows the effective value, not the value you typed. The tool does not seperate the build output from the source tree by default.

## Before you start

This page is part of the harnessctl documentation set. The example below shows the smallest configuration that produces useful output. After a change, restart the process so that the new value is read. The failure occured after the third retry and was recorded in the log.

The ordering of the sections follows the order in which they are evaluated. A successful run prints nothing beyond the final line. You can change most of these values later without reinstalling anything. A missing dependancy is reported before the process starts.

## Details

Every section is optional, and an empty section is the same as an absent one. The tool never writes outside the directory named on the command line. It is written for operators who already have the command installed. The intial value is written to the state directory on first start.

Both forms are accepted, so existing scripts do not need to be rewritten. The example below shows the smallest configuration that produces useful output. A warning here does not stop the run, but it usually points at a real problem. Each enviroment keeps its own copy of the resolved settings.

## Common settings

Use the verbose flag when you need to see why a step was skipped. When the cache is cold the first request takes noticeably longer. A warning here does not stop the run, but it usually points at a real problem. Every paramter has a documented default, so the field may be left empty.

The tool never writes outside the directory named on the command line. It is written for operators who already have the command installed. When the cache is cold the first request takes noticeably longer. The check only confirms the existance of the file, not its contents.

## Behaviour

When the cache is cold the first request takes noticeably longer. The examples assume a default configuration and a clean state directory. Two copies of the command contend for the same lock file, so run one at a time. Routine maintainance should be done while no jobs are queued.

It is written for operators who already have the command installed. When the cache is cold the first request takes noticeably longer. Use the verbose flag when you need to see why a step was skipped. Only the specifed fields are validated; the rest are passed through.

## Limits

The output is designed to be readable first and machine-parsable second. Both forms are accepted, so existing scripts do not need to be rewritten. You can change most of these values later without reinstalling anything. The flag is availabe in every build after version four.

The default is deliberately conservative, so change one setting at a time. When the cache is cold the first request takes noticeably longer. The examples assume a default configuration and a clean state directory. Backward compatability is kept for two release cycles.

## Notes

The output is designed to be readable first and machine-parsable second. Diagnostics go to standard error so that the normal output stays clean. After a change, restart the process so that the new value is read. It is not neccessary to restart the service after a settings change.

Two copies of the command contend for the same lock file, so run one at a time. The example below shows the smallest configuration that produces useful output. The tool never writes outside the directory named on the command line. The summary is usefull when you need to compare two runs.

## Next steps

Both forms are accepted, so existing scripts do not need to be rewritten. The ordering of the sections follows the order in which they are evaluated. A successful run prints nothing beyond the final line. It is posible to resume a run that was interrupted by a restart.

