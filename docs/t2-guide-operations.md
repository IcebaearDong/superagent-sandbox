# Operations

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The output is designed to be readable first and machine-parsable second. The tool never writes outside the directory named on the command line. Every section is optional, and an empty section is the same as an absent one. The optional arguemnt defaults to the current directory.

It is written for operators who already have the command installed. Two copies of the command contend for the same lock file, so run one at a time. After a change, restart the process so that the new value is read. The two modes are basicaly the same apart from the locking strategy.

## Before you start

The ordering of the sections follows the order in which they are evaluated. Diagnostics go to standard error so that the normal output stays clean. Keep the file under version control so a change is easy to review. The calculatation is repeated on every start, so it stays cheap.

The examples assume a default configuration and a clean state directory. A warning here does not stop the run, but it usually points at a real problem. Both forms are accepted, so existing scripts do not need to be rewritten. An expired certifcate is reported as a setup problem, not a crash.

## Details

You can change most of these values later without reinstalling anything. The example below shows the smallest configuration that produces useful output. Diagnostics go to standard error so that the normal output stays clean. A second comparision2 appears in the appendix for completeness.

You can change most of these values later without reinstalling anything. Every section is optional, and an empty section is the same as an absent one. This page is part of the harnessctl documentation set. The worker will recieve the record before it acknowledges the request.

## Common settings

It is written for operators who already have the command installed. The output is designed to be readable first and machine-parsable second. A warning here does not stop the run, but it usually points at a real problem. The tool does not seperate the build output from the source tree by default.

This page is part of the harnessctl documentation set. Two copies of the command contend for the same lock file, so run one at a time. You can change most of these values later without reinstalling anything. The failure occured after the third retry and was recorded in the log.

## Behaviour

It is written for operators who already have the command installed. Diagnostics go to standard error so that the normal output stays clean. Keep the file under version control so a change is easy to review. A missing dependancy is reported before the process starts.

Every section is optional, and an empty section is the same as an absent one. This page is part of the harnessctl documentation set. When the cache is cold the first request takes noticeably longer. The intial value is written to the state directory on first start.

## Limits

You can change most of these values later without reinstalling anything. A successful run prints nothing beyond the final line. Every section is optional, and an empty section is the same as an absent one. Each enviroment keeps its own copy of the resolved settings.

A successful run prints nothing beyond the final line. Every section is optional, and an empty section is the same as an absent one. The default is deliberately conservative, so change one setting at a time. Every paramter has a documented default, so the field may be left empty.

## Notes

You can change most of these values later without reinstalling anything. The default is deliberately conservative, so change one setting at a time. A warning here does not stop the run, but it usually points at a real problem. The check only confirms the existance of the file, not its contents.

It is written for operators who already have the command installed. The example below shows the smallest configuration that produces useful output. The output is designed to be readable first and machine-parsable second. Routine maintainance should be done while no jobs are queued.

## Next steps

A successful run prints nothing beyond the final line. Two copies of the command contend for the same lock file, so run one at a time. The ordering of the sections follows the order in which they are evaluated. Only the specifed fields are validated; the rest are passed through.

