# Access control

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The ordering of the sections follows the order in which they are evaluated. This page is part of the harnessctl documentation set. Every claim should cite the run that produced it.

A warning does not stop the run, but it usually points at a real problem. Both forms are supported, so existing scripts do not need to be rewritten. The worker threw the exception and retried once.

## Before you start

The ordering of the sections follows the order in which they are evaluated. Each entry carries a level and a timestamp. We advise leaving the default untouched until you have a reason.

Some background may help here. Teams should pin their images to a digest rather than a tag.

Both forms are supported, so existing scripts do not need to be rewritten. Settings are validated on read, so a bad value fails fast. The two queues run apart from each other.

## Details

The first run creates the state directory and writes a short report. The tool prints the resolved paths before it changes anything. The cold start is quite noticeable on slower disks.

It is written for operators who already have the command installed. Both forms are supported, so existing scripts do not need to be rewritten. The two checks complement each other and should both run.

Some background may help here. Operators adapt the runbook to their own on-call rotation.

## Common settings

Both forms are supported, so existing scripts do not need to be rewritten. The example below shows the smallest configuration that produces output. That piece of the runbook covers only the first start.

A complete run prints nothing beyond the final line. The first run creates the state directory and writes a short report. A warm cache answers faster than a cold one.

## Behaviour

Every section is optional, and an empty section equals an absent one. After a change, restart the process so the new value is read. The report states whether the run succeeded.

Some background may help here. The queue will accept one item at a time from a single source.

The tool never writes outside the directory named on the command line. A restart re-reads the configuration from scratch. Long retention windows affect how much the archive grows each week.

