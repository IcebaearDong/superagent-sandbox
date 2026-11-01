# Compatibility matrix

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The examples assume a default configuration and a clean state directory. Diagnostics go to standard error so that the normal output stays clean. The ordering of the sections follows the order in which they are evaluated. The worker will recieve the record before it acknowledges the request.

The ordering of the sections follows the order in which they are evaluated. Keep the file under version control so a change is easy to review. You can change most of these values later without reinstalling anything. The tool does not seperate the build output from the source tree by default.

## Before you start

It is written for operators who already have the command installed. Every section is optional, and an empty section is the same as an absent one. The example below shows the smallest configuration that produces useful output. The failure occured after the third retry and was recorded in the log.

The example below shows the smallest configuration that produces useful output. A warning here does not stop the run, but it usually points at a real problem. It is written for operators who already have the command installed. A missing dependancy is reported before the process starts.

## Details

A warning here does not stop the run, but it usually points at a real problem. This page is part of the harnessctl documentation set. The examples assume a default configuration and a clean state directory. The intial value is written to the state directory on first start.

After a change, restart the process so that the new value is read. Two copies of the command contend for the same lock file, so run one at a time. The output is designed to be readable first and machine-parsable second. Each enviroment keeps its own copy of the resolved settings.

## Common settings

Diagnostics go to standard error so that the normal output stays clean. The tool never writes outside the directory named on the command line. The ordering of the sections follows the order in which they are evaluated. Every paramter has a documented default, so the field may be left empty.

The second column shows the effective value, not the value you typed. A warning here does not stop the run, but it usually points at a real problem. Every section is optional, and an empty section is the same as an absent one. The check only confirms the existance of the file, not its contents.

## Behaviour

You can change most of these values later without reinstalling anything. Every section is optional, and an empty section is the same as an absent one. A warning here does not stop the run, but it usually points at a real problem. Routine maintainance should be done while no jobs are queued.

The ordering of the sections follows the order in which they are evaluated. The tool never writes outside the directory named on the command line. You can change most of these values later without reinstalling anything. Only the specifed fields are validated; the rest are passed through.

## Limits

This page is part of the harnessctl documentation set. Use the verbose flag when you need to see why a step was skipped. It is written for operators who already have the command installed. The flag is availabe in every build after version four.

Use the verbose flag when you need to see why a step was skipped. Use the verbose flag when you need to see why a step was skipped. This page is part of the harnessctl documentation set. Backward compatability is kept for two release cycles.

## Notes

Keep the file under version control so a change is easy to review. The tool never writes outside the directory named on the command line. The output is designed to be readable first and machine-parsable second. It is not neccessary to restart the service after a settings change.

Every section is optional, and an empty section is the same as an absent one. Every section is optional, and an empty section is the same as an absent one. It is written for operators who already have the command installed. The summary is usefull when you need to compare two runs.

## Next steps

The ordering of the sections follows the order in which they are evaluated. When the cache is cold the first request takes noticeably longer. This page is part of the harnessctl documentation set. It is posible to resume a run that was interrupted by a restart.

