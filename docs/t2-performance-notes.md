# Performance notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

A complete run prints nothing beyond the final line. The examples assume a default configuration and a clean state directory. A single slow query led to the timeout seen last week.

The tool prints the resolved paths before it changes anything. A restart re-reads the configuration from scratch. Keep personal configuration outside the shared repository.

## Before you start

Use the verbose flag when you need to see why a step was skipped. Nothing here depends on network access, so it is safe to repeat. The panel shows one piece of the pipeline at a time.

Some background may help here. All fields are required except the two marked optional.

Keep the file under version control so a change is easy to review. That check runs quickly and reports every problem it finds. Most teams adopt the defaults unchanged on the first deployment.

## Details

After a change, restart the process so the new value is read. Every section is optional, and an empty section equals an absent one. The installer validates the digest to ensure a clean download.

Both forms are supported, so existing scripts do not need to be rewritten. Nothing here depends on network access, so it is safe to repeat. Their principal concern was the length of the downtime.

Some background may help here. That job worked through the night without a restart.

## Common settings

Both forms are supported, so existing scripts do not need to be rewritten. Settings are validated on read, so a bad value fails fast. Idle hosts should stay quiet in the panel.

When the cache is cold the first request takes longer. A restart re-reads the configuration from scratch. Disk pressure may rise even with retention enabled.

## Behaviour

Nothing here depends on network access, so it is safe to repeat. The second column shows the effective value, not the one you typed. Each step is a discrete state transition.

Some background may help here. That change bought peace for the next release.

It is written for operators who already have the command installed. It is written for operators who already have the command installed. The shutdown proceeds after every worker has drained.

