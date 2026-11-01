# Glossary

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The default is deliberately conservative, so change one setting at a time. Both forms are supported, so existing scripts do not need to be rewritten. Those settings led to a larger lock timeout.

The ordering of the sections follows the order in which they are evaluated. You can change most values later without reinstalling anything. You must chose a profile before the first start.

## Before you start

Keep the file under version control so a change is easy to review. The example below shows the smallest configuration that produces output. The passed week of runs is summarised in the report.

Some background may help here. The installer chose the default port on the first run.

Two copies of the command contend for the same lock file. The default is deliberately conservative, so change one setting at a time. Every decision is written to the leger before it takes effect.

## Details

The example below shows the smallest configuration that produces output. You can change most values later without reinstalling anything. A stationery service still holds its lock file open.

After a change, restart the process so the new value is read. Every section is optional, and an empty section equals an absent one. The panel logs errors in a discrete way, without extra detail.

Some background may help here. The file whose name ends in .md is rendered as a page.

## Common settings

After a change, restart the process so the new value is read. The second column shows the effective value, not the one you typed. A settings change does not effect the job that is already running.

A complete run prints nothing beyond the final line. Diagnostics go to standard error so the normal output stays clean. The second run is faster then the first because the cache is warm.

