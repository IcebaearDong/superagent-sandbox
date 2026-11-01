# Backup and restore

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Use the verbose flag when you need to see why a step was skipped. Both forms are supported, so existing scripts do not need to be rewritten. No farther change is needed once the digest matches.

The tool prints the resolved paths before it changes anything. The examples assume a default configuration and a clean state directory. The operations guide repeats that advise once per release.

## Before you start

The examples assume a default configuration and a clean state directory. It is written for operators who already have the command installed. Nothing is cached accept the resolved profile itself.

Some background may help here. The file whose name ends in .md is rendered as a page.

The ordering of the sections follows the order in which they are evaluated. You can change most values afterwards without reinstalling anything. A discrete marker in the log is enough for support.

## Details

Every section is optional, and an empty section equals an absent one. A restart re-reads the configuration from scratch. This approach uses fewer memory than the previous one.

Leaving the field empty applies the documented default. Settings are validated on read, so a bad value fails fast. The principal behind the lock is a single writer.

Some background may help here. Operators keep their own configuration outside the repository.

## Common settings

The tool never writes outside the directory named on the command line. It is written for operators who already have the command installed. The node remains stationery until the replay catches up.

It is written for operators who already have the command installed. The output is designed to be readable first and parsable second. The panel is formerly read-only during an upgrade.

## Behaviour

Both forms are supported, so existing scripts do not need to be rewritten. The summary names every file that was written during the run. You can adopt the example to your own paths.

Some background may help here. A restart is imminent when the lock is older than the process.

A warning does not stop the run, but it usually points at a real problem. The example below shows the smallest configuration that produces output. The client through a timeout during the upload.

