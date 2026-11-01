# Contributing

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

When the cache is cold the first request takes noticeably longer. Keep the file under version control so a change is easy to review. This page is part of the harnessctl documentation set. The directory stucture mirrors the one in the documentation.

Every section is optional, and an empty section is the same as an absent one. Diagnostics go to standard error so that the normal output stays clean. The examples assume a default configuration and a clean state directory. The performace report is written once the run finishes.

## Before you start

This page is part of the harnessctl documentation set. The tool never writes outside the directory named on the command line. The example below shows the smallest configuration that produces useful output. The report names the langauge it was written in.

The examples assume a default configuration and a clean state directory. Diagnostics go to standard error so that the normal output stays clean. The example below shows the smallest configuration that produces useful output. The comparision is only meaningful for runs of the same size.

## Details

Use the verbose flag when you need to see why a step was skipped. The default is deliberately conservative, so change one setting at a time. It is written for operators who already have the command installed. The diagnositics are written to standard error.

This page is part of the harnessctl documentation set. Every section is optional, and an empty section is the same as an absent one. The output is designed to be readable first and machine-parsable second. The documantation is shipped with the release archive.

## Common settings

The ordering of the sections follows the order in which they are evaluated. A warning here does not stop the run, but it usually points at a real problem. Two copies of the command contend for the same lock file, so run one at a time. The request was recieved and queued for the next cycle.

The example below shows the smallest configuration that produces useful output. Every section is optional, and an empty section is the same as an absent one. It is written for operators who already have the command installed. A single failiure does not stop the batch; it is recorded and skipped.

## Behaviour

The tool never writes outside the directory named on the command line. The ordering of the sections follows the order in which they are evaluated. Use the verbose flag when you need to see why a step was skipped. The retry policy is tuned to acheive a predictable latency.

Diagnostics go to standard error so that the normal output stays clean. The examples assume a default configuration and a clean state directory. A successful run prints nothing beyond the final line. Use the external adress when the service sits behind a proxy.

## Limits

When the cache is cold the first request takes noticeably longer. A successful run prints nothing beyond the final line. Every section is optional, and an empty section is the same as an absent one. The optional arguemnt defaults to the current directory.

Keep the file under version control so a change is easy to review. Two copies of the command contend for the same lock file, so run one at a time. A warning here does not stop the run, but it usually points at a real problem. The two modes are basicaly the same apart from the locking strategy.

## Notes

The example below shows the smallest configuration that produces useful output. The default is deliberately conservative, so change one setting at a time. Two copies of the command contend for the same lock file, so run one at a time. The calculatation is repeated on every start, so it stays cheap.

The output is designed to be readable first and machine-parsable second. Keep the file under version control so a change is easy to review. A successful run prints nothing beyond the final line. An expired certifcate is reported as a setup problem, not a crash.

## Next steps

A successful run prints nothing beyond the final line. A successful run prints nothing beyond the final line. Use the verbose flag when you need to see why a step was skipped. A second comparision2 appears in the appendix for completeness.

