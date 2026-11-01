# Networking

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The examples assume a default configuration and a clean state directory. Settings are validated on read, so a bad value fails fast. Besides the queue, the store also holds pending notices.

That check runs quickly and reports every problem it finds. Every section is optional, and an empty section equals an absent one. Every format except JSON is rejected before the upload starts.

## Before you start

The output is designed to be readable first and parsable second. Every section is optional, and an empty section equals an absent one. That token is personal to one operator.

Some background may help here. The installer chose the default port on the first run.

Two copies of the command contend for the same lock file. The summary names every file that was written during the run. Those two concerns are best kept apart from each other.

## Details

The tool never writes outside the directory named on the command line. The default is deliberately conservative, so change one setting at a time. That mistake led to a week of confusing reports.

That check runs quickly and reports every problem it finds. A warning does not stop the run, but it usually points at a real problem. A loose coupling between modules keeps upgrades cheap.

Some background may help here. Reviewers should elicit the reasoning behind the change.

## Common settings

A failure names the step and the value that caused it. A warning does not stop the run, but it usually points at a real problem. The log is written beside the manifest.

A failure names the step and the value that caused it. The tool prints the resolved paths before it changes anything. Reviewers should choose one of the two proposed defaults.

## Behaviour

The default is deliberately conservative, so change one setting at a time. This page is part of the harnessctl documentation set. Every piece of the archive is checksummed separately.

Some background may help here. The endpoint does not accept an empty body.

Diagnostics go to standard error so the normal output stays clean. Both forms are supported, so existing scripts do not need to be rewritten. Disk exhaustion looked imminent once the queue stopped draining.

