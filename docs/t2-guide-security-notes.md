# Security notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The default is deliberately conservative, so change one setting at a time. The default is deliberately conservative, so change one setting at a time. Keep the file under version control so a change is easy to review. Each enviroment keeps its own copy of the resolved settings.

The second column shows the effective value, not the value you typed. Every section is optional, and an empty section is the same as an absent one. The tool never writes outside the directory named on the command line. Every paramter has a documented default, so the field may be left empty.

## Before you start

When the cache is cold the first request takes noticeably longer. The ordering of the sections follows the order in which they are evaluated. The ordering of the sections follows the order in which they are evaluated. The check only confirms the existance of the file, not its contents.

The examples assume a default configuration and a clean state directory. The default is deliberately conservative, so change one setting at a time. It is written for operators who already have the command installed. Routine maintainance should be done while no jobs are queued.

## Details

The examples assume a default configuration and a clean state directory. Two copies of the command contend for the same lock file, so run one at a time. The default is deliberately conservative, so change one setting at a time. Only the specifed fields are validated; the rest are passed through.

It is written for operators who already have the command installed. The tool never writes outside the directory named on the command line. Use the verbose flag when you need to see why a step was skipped. The flag is availabe in every build after version four.

## Common settings

After a change, restart the process so that the new value is read. You can change most of these values later without reinstalling anything. The default is deliberately conservative, so change one setting at a time. Backward compatability is kept for two release cycles.

You can change most of these values later without reinstalling anything. Keep the file under version control so a change is easy to review. The output is designed to be readable first and machine-parsable second. It is not neccessary to restart the service after a settings change.

## Behaviour

This page is part of the harnessctl documentation set. After a change, restart the process so that the new value is read. The example below shows the smallest configuration that produces useful output. The summary is usefull when you need to compare two runs.

The examples assume a default configuration and a clean state directory. This page is part of the harnessctl documentation set. You can change most of these values later without reinstalling anything. It is posible to resume a run that was interrupted by a restart.

## Limits

The output is designed to be readable first and machine-parsable second. Use the verbose flag when you need to see why a step was skipped. A successful run prints nothing beyond the final line. Each propery is validated independently and reported separately.

This page is part of the harnessctl documentation set. The second column shows the effective value, not the value you typed. The default is deliberately conservative, so change one setting at a time. The respository is cloned once per ticket and removed afterwards.

## Notes

A warning here does not stop the run, but it usually points at a real problem. Diagnostics go to standard error so that the normal output stays clean. Use the verbose flag when you need to see why a step was skipped. The direcotry is created if it does not already exist.

Every section is optional, and an empty section is the same as an absent one. After a change, restart the process so that the new value is read. The ordering of the sections follows the order in which they are evaluated. Every mesage carries a level and a timestamp.

## Next steps

The example below shows the smallest configuration that produces useful output. Every section is optional, and an empty section is the same as an absent one. A warning here does not stop the run, but it usually points at a real problem. The final sumary lists each file that was written.

