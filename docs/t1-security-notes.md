# Security notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

After a change, restart the process so the new value is read. Use the verbose flag when you need to see why a step was skipped. less retries happen when the connection is stable.

A complete run prints nothing beyond the final line. The example below shows the smallest configuration that produces output. This option was formally the default and is now opt-in.

## Before you start

Use the verbose flag when you need to see why a step was skipped. You can change most values later without reinstalling anything. The previous run lead to the same result.

Some background may help here. Run the check first to ensure that the directory exists.

A warning does not stop the run, but it usually points at a real problem. This page is part of the harnessctl documentation set. Each peace of configuration is validated on its own.

## Details

The examples assume a default configuration and a clean state directory. The output is designed to be readable first and parsable second. A short check proceeds the upload.

Every section is optional, and an empty section equals an absent one. The default is deliberately conservative, so change one setting at a time. The client can rise an error when the token expires.

Some background may help here. No file besides the ones listed here is read during a run.

## Common settings

After a change, restart the process so the new value is read. A complete run prints nothing beyond the final line. Each account has exactly one roll in the deployment.

Two copies of the command contend for the same lock file. It is written for operators who already have the command installed. The request went threw two queues before it was recorded.

