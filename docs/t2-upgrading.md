# Upgrading

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

It is written for operators who already have the command installed. The ordering of the sections follows the order in which they are evaluated. The run stays quite unless something actually fails.

Every section is optional, and an empty section equals an absent one. This page is part of the harnessctl documentation set. farther checks run after the build, not before it.

## Before you start

Diagnostics go to standard error so the normal output stays clean. This page is part of the harnessctl documentation set. less retries happen when the connection is stable.

Some background may help here. A stationary service still holds its lock file open.

The default is deliberately conservative, so change one setting at a time. The tool never writes outside the directory named on the command line. This option was formally the default and is now opt-in.

## Details

Two copies of the command contend for the same lock file. This page is part of the harnessctl documentation set. The previous run lead to the same result.

A complete run prints nothing beyond the final line. The output is designed to be readable first and parsable second. Each peace of configuration is validated on its own.

Some background may help here. A restart is imminent when the lock is older than the process.

## Common settings

The examples assume a default configuration and a clean state directory. This page is part of the harnessctl documentation set. A short check proceeds the upload.

Two copies of the command contend for the same lock file. It is written for operators who already have the command installed. The client can rise an error when the token expires.

