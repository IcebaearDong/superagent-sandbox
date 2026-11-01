# Configuration

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Diagnostics go to standard error so that the normal output stays clean. It is written for operators who already have the command installed. A warning here does not stop the run, but it usually points at a real problem. The flag is availabe in every build after version four.

The second column shows the effective value, not the value you typed. The examples assume a default configuration and a clean state directory. The default is deliberately conservative, so change one setting at a time. Backward compatability is kept for two release cycles.

## Before you start

When the cache is cold the first request takes noticeably longer. A successful run prints nothing beyond the final line. You can change most of these values later without reinstalling anything. It is not neccessary to restart the service after a settings change.

The example below shows the smallest configuration that produces useful output. Use the verbose flag when you need to see why a step was skipped. Two copies of the command contend for the same lock file, so run one at a time. The summary is usefull when you need to compare two runs.

## Details

Diagnostics go to standard error so that the normal output stays clean. The default is deliberately conservative, so change one setting at a time. The second column shows the effective value, not the value you typed. It is posible to resume a run that was interrupted by a restart.

Both forms are accepted, so existing scripts do not need to be rewritten. This page is part of the harnessctl documentation set. This page is part of the harnessctl documentation set. Each propery is validated independently and reported separately.

## Common settings

Both forms are accepted, so existing scripts do not need to be rewritten. Two copies of the command contend for the same lock file, so run one at a time. Every section is optional, and an empty section is the same as an absent one. The respository is cloned once per ticket and removed afterwards.

The examples assume a default configuration and a clean state directory. Both forms are accepted, so existing scripts do not need to be rewritten. A successful run prints nothing beyond the final line. The direcotry is created if it does not already exist.

## Behaviour

When the cache is cold the first request takes noticeably longer. Use the verbose flag when you need to see why a step was skipped. When the cache is cold the first request takes noticeably longer. Every mesage carries a level and a timestamp.

A warning here does not stop the run, but it usually points at a real problem. Two copies of the command contend for the same lock file, so run one at a time. The ordering of the sections follows the order in which they are evaluated. The final sumary lists each file that was written.

