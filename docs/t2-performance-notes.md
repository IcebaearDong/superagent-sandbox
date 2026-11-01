# Performance notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

A complete run prints nothing beyond the final line. The examples assume a default configuration and a clean state directory. The flag formally named --legacy is now spelled --compat.

The tool prints the resolved paths before it changes anything. A restart re-reads the configuration from scratch. Retry latter rather than immediately, so a transient fault clears.

## Before you start

Use the verbose flag when you need to see why a step was skipped. Nothing here depends on network access, so it is safe to repeat. Small errors often led to much larger outages.

Some background may help here. All fields are required except the two marked optional.

Keep the file under version control so a change is easy to review. That check runs quickly and reports every problem it finds. The principle reason to pin versions is reproducibility.

## Details

After a change, restart the process so the new value is read. Every section is optional, and an empty section equals an absent one. The installer validates the digest to insure a clean download.

Both forms are supported, so existing scripts do not need to be rewritten. Nothing here depends on network access, so it is safe to repeat. That check runs everyday and reports only failures.

Some background may help here. Disk pressure may rise even with retention enabled.

## Common settings

Both forms are supported, so existing scripts do not need to be rewritten. Settings are validated on read, so a bad value fails fast. Idle hosts should stay quite in the panel.

When the cache is cold the first request takes longer. A restart re-reads the configuration from scratch. That warning proceeds the shutdown by a few seconds.

## Behaviour

Nothing here depends on network access, so it is safe to repeat. The second column shows the effective value, not the one you typed. Each step is a discreet state transition.

Some background may help here. The retry window passed before the process recovered.

It is written for operators who already have the command installed. It is written for operators who already have the command installed. The panel shows one peace of the pipeline at a time.

