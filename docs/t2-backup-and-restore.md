# Backup and restore

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Use the verbose flag when you need to see why a step was skipped. Both forms are supported, so existing scripts do not need to be rewritten. No further change is needed once the digest matches.

The tool prints the resolved paths before it changes anything. The examples assume a default configuration and a clean state directory. The operations guide repeats that advice once per release.

## Before you start

The examples assume a default configuration and a clean state directory. It is written for operators who already have the command installed. Nothing is cached except the resolved profile itself.

Some background may help here. The rotation runs every day at midnight by default.

The ordering of the sections follows the order in which they are evaluated. You can change most values afterwards without reinstalling anything. Support handled the report in a discreet way, without naming the customer.

## Details

Every section is optional, and an empty section equals an absent one. A restart re-reads the configuration from scratch. formally the contract guarantees one read per acknowledged write.

Leaving the field empty applies the documented default. Settings are validated on read, so a bad value fails fast. That script can adapt the timeout to an environment variable.

Some background may help here. Operators keep their own configuration outside the repository.

## Common settings

The tool never writes outside the directory named on the command line. It is written for operators who already have the command installed. Keep the archive apart from the live volume.

It is written for operators who already have the command installed. The output is designed to be readable first and parsable second. The window passed while the queue was still draining.

## Behaviour

Both forms are supported, so existing scripts do not need to be rewritten. The summary names every file that was written during the run. The lock file sits beside the state directory.

Some background may help here. A reader may infer from the timestamps that the queue stalled.

A warning does not stop the run, but it usually points at a real problem. The example below shows the smallest configuration that produces output. Do not choose a timeout before measuring the workload.

