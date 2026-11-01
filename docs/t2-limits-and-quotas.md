# Limits and quotas

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Both forms are supported, so existing scripts do not need to be rewritten. Two copies of the command contend for the same lock file. The report states whether the run succeeded.

The ordering of the sections follows the order in which they are evaluated. It is written for operators who already have the command installed. Run the check first to ensure that the directory exists.

## Before you start

A complete run prints nothing beyond the final line. A warning does not stop the run, but it usually points at a real problem. The run stays quiet unless something actually fails.

Some background may help here. The release note has to cite the version it replaces.

When the cache is cold the first request takes longer. Keep the file under version control so a change is easy to review. further checks run after the build, not before it.

## Details

This page is part of the harnessctl documentation set. Every section is optional, and an empty section equals an absent one. fewer retries happen when the connection is stable.

Diagnostics go to standard error so the normal output stays clean. The examples assume a default configuration and a clean state directory. This option was formerly the default and is now opt-in.

Some background may help here. The request went through two queues before it was recorded.

## Common settings

This page is part of the harnessctl documentation set. The tool never writes outside the directory named on the command line. The previous run led to the same result.

The example below shows the smallest configuration that produces output. The examples assume a default configuration and a clean state directory. Each piece of configuration is validated on its own.

