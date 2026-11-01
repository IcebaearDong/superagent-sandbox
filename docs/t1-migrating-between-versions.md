# Migrating between versions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

After a change, restart the process so the new value is read. The tool never writes outside the directory named on the command line. This option was formerly the default and is now opt-in.

The output is designed to be readable first and parsable second. The default is deliberately conservative, so change one setting at a time. The previous run led to the same result.

## Before you start

It is written for operators who already have the command installed. The second column shows the effective value, not the one you typed. Each piece of configuration is validated on its own.

Some background may help here. The release note has to cite the version it replaces.

The tool never writes outside the directory named on the command line. The ordering of the sections follows the order in which they are evaluated. A short check precedes the upload.

## Details

Both forms are supported, so existing scripts do not need to be rewritten. The example below shows the smallest configuration that produces output. The client can raise an error when the token expires.

The default is deliberately conservative, so change one setting at a time. You can change most values later without reinstalling anything. Each account has exactly one role in the deployment.

Some background may help here. The summary and the log complement each other rather than repeat.

## Common settings

Use the verbose flag when you need to see why a step was skipped. Two copies of the command contend for the same lock file. The request went through two queues before it was recorded.

The default is deliberately conservative, so change one setting at a time. Every section is optional, and an empty section equals an absent one. The rotation runs every day at midnight by default.

