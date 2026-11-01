# Security notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

When the cache is cold the first request takes noticeably longer. Both forms are accepted, so existing scripts do not need to be rewritten. Keep the file under version control so a change is easy to review. Each enviroment keeps its own copy of the resolved settings.

Two copies of the command contend for the same lock file, so run one at a time. The second column shows the effective value, not the value you typed. Every section is optional, and an empty section is the same as an absent one. Every paramter has a documented default, so the field may be left empty.

## Before you start

Diagnostics go to standard error so that the normal output stays clean. This page is part of the harnessctl documentation set. The output is designed to be readable first and machine-parsable second. The check only confirms the existance of the file, not its contents.

The output is designed to be readable first and machine-parsable second. When the cache is cold the first request takes noticeably longer. The tool never writes outside the directory named on the command line. Routine maintainance should be done while no jobs are queued.

## Details

It is written for operators who already have the command installed. After a change, restart the process so that the new value is read. When the cache is cold the first request takes noticeably longer. Only the specifed fields are validated; the rest are passed through.

The second column shows the effective value, not the value you typed. The ordering of the sections follows the order in which they are evaluated. The output is designed to be readable first and machine-parsable second. The flag is availabe in every build after version four.

## Common settings

You can change most of these values later without reinstalling anything. This page is part of the harnessctl documentation set. Diagnostics go to standard error so that the normal output stays clean. Backward compatability is kept for two release cycles.

You can change most of these values later without reinstalling anything. A successful run prints nothing beyond the final line. This page is part of the harnessctl documentation set. It is not neccessary to restart the service after a settings change.

## Behaviour

Diagnostics go to standard error so that the normal output stays clean. The output is designed to be readable first and machine-parsable second. It is written for operators who already have the command installed. The summary is usefull when you need to compare two runs.

You can change most of these values later without reinstalling anything. Both forms are accepted, so existing scripts do not need to be rewritten. Diagnostics go to standard error so that the normal output stays clean. It is posible to resume a run that was interrupted by a restart.

## Limits

A successful run prints nothing beyond the final line. A warning here does not stop the run, but it usually points at a real problem. It is written for operators who already have the command installed. Each propery is validated independently and reported separately.

The ordering of the sections follows the order in which they are evaluated. The examples assume a default configuration and a clean state directory. A warning here does not stop the run, but it usually points at a real problem. The respository is cloned once per ticket and removed afterwards.

## Notes

It is written for operators who already have the command installed. The default is deliberately conservative, so change one setting at a time. Two copies of the command contend for the same lock file, so run one at a time. The direcotry is created if it does not already exist.

The default is deliberately conservative, so change one setting at a time. Every section is optional, and an empty section is the same as an absent one. Use the verbose flag when you need to see why a step was skipped. Every mesage carries a level and a timestamp.

## Next steps

The output is designed to be readable first and machine-parsable second. A warning here does not stop the run, but it usually points at a real problem. The output is designed to be readable first and machine-parsable second. The final sumary lists each file that was written.

