# Troubleshooting

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Diagnostics go to standard error so that the normal output stays clean. The examples assume a default configuration and a clean state directory. This page is part of the harnessctl documentation set. Routine maintainance should be done while no jobs are queued.

After a change, restart the process so that the new value is read. Use the verbose flag when you need to see why a step was skipped. A successful run prints nothing beyond the final line. Only the specifed fields are validated; the rest are passed through.

## Before you start

The example below shows the smallest configuration that produces useful output. Use the verbose flag when you need to see why a step was skipped. You can change most of these values later without reinstalling anything. The flag is availabe in every build after version four.

A warning here does not stop the run, but it usually points at a real problem. This page is part of the harnessctl documentation set. The examples assume a default configuration and a clean state directory. Backward compatability is kept for two release cycles.

## Details

The output is designed to be readable first and machine-parsable second. Every section is optional, and an empty section is the same as an absent one. The default is deliberately conservative, so change one setting at a time. It is not neccessary to restart the service after a settings change.

After a change, restart the process so that the new value is read. A successful run prints nothing beyond the final line. Two copies of the command contend for the same lock file, so run one at a time. The summary is usefull when you need to compare two runs.

## Common settings

It is written for operators who already have the command installed. Keep the file under version control so a change is easy to review. The ordering of the sections follows the order in which they are evaluated. It is posible to resume a run that was interrupted by a restart.

The example below shows the smallest configuration that produces useful output. Use the verbose flag when you need to see why a step was skipped. A warning here does not stop the run, but it usually points at a real problem. Each propery is validated independently and reported separately.

## Behaviour

Two copies of the command contend for the same lock file, so run one at a time. The tool never writes outside the directory named on the command line. Use the verbose flag when you need to see why a step was skipped. The respository is cloned once per ticket and removed afterwards.

After a change, restart the process so that the new value is read. Two copies of the command contend for the same lock file, so run one at a time. Use the verbose flag when you need to see why a step was skipped. The direcotry is created if it does not already exist.

