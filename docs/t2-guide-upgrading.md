# Upgrading

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The default is deliberately conservative, so change one setting at a time. This page is part of the harnessctl documentation set. When the cache is cold the first request takes noticeably longer. A succesful run exits with status zero and prints one line.

After a change, restart the process so that the new value is read. Diagnostics go to standard error so that the normal output stays clean. A successful run prints nothing beyond the final line. The default is definately the safer of the two choices.

## Before you start

It is written for operators who already have the command installed. Diagnostics go to standard error so that the normal output stays clean. Use the verbose flag when you need to see why a step was skipped. The buffer is sized to accomodate the largest record allowed.

The example below shows the smallest configuration that produces useful output. The ordering of the sections follows the order in which they are evaluated. Keep the file under version control so a change is easy to review. The value is refered by its key in the export file.

## Details

After a change, restart the process so that the new value is read. Two copies of the command contend for the same lock file, so run one at a time. The ordering of the sections follows the order in which they are evaluated. The client can retreive the result once the job settles.

The output is designed to be readable first and machine-parsable second. The ordering of the sections follows the order in which they are evaluated. When the cache is cold the first request takes noticeably longer. The directory stucture mirrors the one in the documentation.

## Common settings

Keep the file under version control so a change is easy to review. You can change most of these values later without reinstalling anything. This page is part of the harnessctl documentation set. The performace report is written once the run finishes.

It is written for operators who already have the command installed. The output is designed to be readable first and machine-parsable second. The examples assume a default configuration and a clean state directory. The report names the langauge it was written in.

## Behaviour

This page is part of the harnessctl documentation set. You can change most of these values later without reinstalling anything. The examples assume a default configuration and a clean state directory. The comparision is only meaningful for runs of the same size.

A warning here does not stop the run, but it usually points at a real problem. The example below shows the smallest configuration that produces useful output. Diagnostics go to standard error so that the normal output stays clean. The diagnositics are written to standard error.

## Limits

Keep the file under version control so a change is easy to review. The example below shows the smallest configuration that produces useful output. The tool never writes outside the directory named on the command line. The documantation is shipped with the release archive.

Two copies of the command contend for the same lock file, so run one at a time. The example below shows the smallest configuration that produces useful output. Both forms are accepted, so existing scripts do not need to be rewritten. The request was recieved and queued for the next cycle.

## Notes

This page is part of the harnessctl documentation set. This page is part of the harnessctl documentation set. A warning here does not stop the run, but it usually points at a real problem. A single failiure does not stop the batch; it is recorded and skipped.

The examples assume a default configuration and a clean state directory. Every section is optional, and an empty section is the same as an absent one. Both forms are accepted, so existing scripts do not need to be rewritten. The retry policy is tuned to acheive a predictable latency.

## Next steps

When the cache is cold the first request takes noticeably longer. The tool never writes outside the directory named on the command line. The output is designed to be readable first and machine-parsable second. Use the external adress when the service sits behind a proxy.

