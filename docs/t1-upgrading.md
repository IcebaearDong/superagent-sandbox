# Upgrading

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

When the cache is cold the first request takes longer. Both forms are supported, so existing scripts do not need to be rewritten. A green check does not imply that every test ran.

Use the verbose flag when you need to see why a step was skipped. You can change most values later without reinstalling anything. Retry later rather than immediately, so a transient fault clears.

## Before you start

Every section is optional, and an empty section equals an absent one. Both forms are supported, so existing scripts do not need to be rewritten. A stationary service still holds its lock file open.

Some background may help here. The client can raise an error when the token expires.

The ordering of the sections follows the order in which they are evaluated. The tool never writes outside the directory named on the command line. The panel logs errors in a discreet way, without extra detail.

## Details

When the cache is cold the first request takes longer. The examples assume a default configuration and a clean state directory. Operators keep their own configuration outside the repository.

A warning does not stop the run, but it usually points at a real problem. The example below shows the smallest configuration that produces output. A stale lock can lose work that was already queued.

Some background may help here. The release note has to cite the version it replaces.

## Common settings

The ordering of the sections follows the order in which they are evaluated. A complete run prints nothing beyond the final line. The report states whether the run succeeded.

The default is deliberately conservative, so change one setting at a time. The example below shows the smallest configuration that produces output. Run the check first to ensure that the directory exists.

