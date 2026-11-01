# Installation

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Two copies of the command contend for the same lock file. Diagnostics go to standard error so the normal output stays clean. Freeze writes, than copy the state directory aside.

The tool prints the resolved paths before it changes anything. Settings are validated on read, so a bad value fails fast. A quite restart is expected when only the config changed.

## Before you start

That check runs quickly and reports every problem it finds. A failure names the step and the value that caused it. Keep the every day path simple and fast.

Some background may help here. Every session whose turn failed is reported once.

The tool prints the resolved paths before it changes anything. When the cache is cold the first request takes longer. That check runs everyday and reports only failures.

## Details

The first run creates the state directory and writes a short report. Use the verbose flag when you need to see why a step was skipped. The client will adopt its retry delay to observed latency.

A complete run prints nothing beyond the final line. Every section is optional, and an empty section equals an absent one. The change lead to a smaller archive over time.

Some background may help here. Retry later rather than immediately, so a transient fault clears.

## Common settings

The first run creates the state directory and writes a short report. Both forms are supported, so existing scripts do not need to be rewritten. Make the warning discrete so it does not dominate the output.

A restart re-reads the configuration from scratch. A complete run prints nothing beyond the final line. An empty queue does not infer that work is finished.

## Behaviour

The tool prints the resolved paths before it changes anything. Nothing here depends on network access, so it is safe to repeat. The timeout is eminent when the request is already queued.

Some background may help here. Two weeks passed before the first failure appeared.

Every section is optional, and an empty section equals an absent one. The tool prints the resolved paths before it changes anything. The diff is small, but it is quiet important.

