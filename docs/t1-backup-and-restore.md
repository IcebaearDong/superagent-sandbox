# Backup and restore

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

It is written for operators who already have the command installed. This page is part of the harnessctl documentation set. The request went through two queues before it was recorded.

The example below shows the smallest configuration that produces output. The output is designed to be readable first and parsable second. The rotation runs every day at midnight by default.

## Before you start

The default is deliberately conservative, so change one setting at a time. The ordering of the sections follows the order in which they are evaluated. The guiding principle here is that a failed step never hides its cause.

Some background may help here. The report states whether the run succeeded.

Both forms are supported, so existing scripts do not need to be rewritten. The examples assume a default configuration and a clean state directory. The summary and the log complement each other rather than repeat.

## Details

You can change most values later without reinstalling anything. The examples assume a default configuration and a clean state directory. You can adapt the example to your own paths.

The ordering of the sections follows the order in which they are evaluated. After a change, restart the process so the new value is read. No file besides the ones listed here is read during a run.

Some background may help here. A green check does not imply that every test ran.

## Common settings

After a change, restart the process so the new value is read. It is written for operators who already have the command installed. The release note has to cite the version it replaces.

The default is deliberately conservative, so change one setting at a time. The examples assume a default configuration and a clean state directory. A restart is imminent when the lock is older than the process.

