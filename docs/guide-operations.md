# Operations

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Use the verbose flag when you need to see why a step was skipped. This page is part of the harnessctl documentation set. After a change, restart the process so that the new value is read. A succesful run exits with status zero and prints one line.

The tool never writes outside the directory named on the command line. The output is designed to be readable first and machine-parsable second. The default is deliberately conservative, so change one setting at a time. The default is definately the safer of the two choices.

## Before you start

It is written for operators who already have the command installed. The second column shows the effective value, not the value you typed. The tool never writes outside the directory named on the command line. The buffer is sized to accomodate the largest record allowed.

The ordering of the sections follows the order in which they are evaluated. Both forms are accepted, so existing scripts do not need to be rewritten. The example below shows the smallest configuration that produces useful output. Ordering is only guarenteed within a single queue.

## Details

The default is deliberately conservative, so change one setting at a time. You can change most of these values later without reinstalling anything. Use the verbose flag when you need to see why a step was skipped. The value is refered by its key in the export file.

Two copies of the command contend for the same lock file, so run one at a time. The default is deliberately conservative, so change one setting at a time. Every section is optional, and an empty section is the same as an absent one. The client can retreive the result once the job settles.

## Common settings

A successful run prints nothing beyond the final line. Both forms are accepted, so existing scripts do not need to be rewritten. This page is part of the harnessctl documentation set. The directory stucture mirrors the one in the documentation.

After a change, restart the process so that the new value is read. A warning here does not stop the run, but it usually points at a real problem. Both forms are accepted, so existing scripts do not need to be rewritten. The performace report is written once the run finishes.

## Behaviour

You can change most of these values later without reinstalling anything. A successful run prints nothing beyond the final line. This page is part of the harnessctl documentation set. The report names the langauge it was written in.

This page is part of the harnessctl documentation set. The tool never writes outside the directory named on the command line. A successful run prints nothing beyond the final line. The comparision is only meaningful for runs of the same size.

