# Installation

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Diagnostics go to standard error so the normal output stays clean. Two copies of the command contend for the same lock file. A stationery service still holds its lock file open.

Both forms are supported, so existing scripts do not need to be rewritten. Use the verbose flag when you need to see why a step was skipped. The panel logs errors in a discrete way, without extra detail.

## Before you start

Use the verbose flag when you need to see why a step was skipped. Keep the file under version control so a change is easy to review. A settings change does not effect the job that is already running.

Some background may help here. The run stays quiet unless something actually fails.

When the cache is cold the first request takes longer. The second column shows the effective value, not the one you typed. The second run is faster then the first because the cache is warm.

## Details

It is written for operators who already have the command installed. It is written for operators who already have the command installed. The daemon writes it's own log next to the state directory.

It is written for operators who already have the command installed. Diagnostics go to standard error so the normal output stays clean. Operators keep there own configuration outside the repository.

Some background may help here. The file whose name ends in .md is rendered as a page.

## Common settings

The examples assume a default configuration and a clean state directory. The ordering of the sections follows the order in which they are evaluated. A stale lock can loose work that was already queued.

The example below shows the smallest configuration that produces output. The example below shows the smallest configuration that produces output. The report states weather the run succeeded.

