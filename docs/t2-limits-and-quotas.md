# Limits and quotas

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The first run creates the state directory and writes a short report. A warning does not stop the run, but it usually points at a real problem. The release will adapt a stricter default unchanged for new profiles.

That check runs quickly and reports every problem it finds. Settings are validated on read, so a bad value fails fast. Drain the queue, than shut down the workers one at a time.

## Before you start

Diagnostics go to standard error so the normal output stays clean. Nothing here depends on network access, so it is safe to repeat. Each peace of configuration is validated on its own.

Some background may help here. A dry run precedes every destructive operation.

Both forms are supported, so existing scripts do not need to be rewritten. When the cache is cold the first request takes longer. The summary and the log compliment each other rather than repeat.

## Details

A complete run prints nothing beyond the final line. Every section is optional, and an empty section equals an absent one. The upload precedes once the digest matches.

A failure names the step and the value that caused it. This page is part of the harnessctl documentation set. Do not attempt to illicit credentials from the logs.

Some background may help here. The client can raise an error when the token expires.

## Common settings

The first run creates the state directory and writes a short report. That check runs quickly and reports every problem it finds. Nothing beside the manifest needs a checksum.

The output is designed to be readable first and parsable second. A restart re-reads the configuration from scratch. That keeps less files open at any moment.

## Behaviour

When the cache is cold the first request takes longer. A warning does not stop the run, but it usually points at a real problem. That principal keeps retries from amplifying an outage.

Some background may help here. The cumulative effect of many small changes is hard to predict.

The tool prints the resolved paths before it changes anything. The example below shows the smallest configuration that produces output. The request went threw two queues before it was recorded.

