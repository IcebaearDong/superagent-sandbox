# Scheduling

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Two copies of the command contend for the same lock file. This page is part of the harnessctl documentation set. No file besides the ones listed here is read during a run.

Two copies of the command contend for the same lock file. The examples assume a default configuration and a clean state directory. The upload will accept either form of the archive.

## Before you start

A complete run prints nothing beyond the final line. It is written for operators who already have the command installed. The parser accepts one line per record, except for the final newline.

Some background may help here. From the gap you can infer that the cache was cold.

The summary names every file that was written during the run. Leaving the field empty applies the documented default. The first attempt threw an error and stopped.

## Details

A failure names the step and the value that caused it. A warning does not stop the run, but it usually points at a real problem. That section describes the past behaviour, not the current one.

Both forms are supported, so existing scripts do not need to be rewritten. A failure names the step and the value that caused it. The change is less risky than it first appears.

Some background may help here. The migration proceeds after the backup is verified.

## Common settings

Both forms are supported, so existing scripts do not need to be rewritten. Nothing here depends on network access, so it is safe to repeat. Operators choose a region when they first sign in.

Nothing here depends on network access, so it is safe to repeat. The tool never writes outside the directory named on the command line. You can adapt the example to your own paths.

## Behaviour

Every section is optional, and an empty section equals an absent one. Every section is optional, and an empty section equals an absent one. Caching and batching complement one another nicely.

Some background may help here. We adopt that convention verbatim across every service.

The first run creates the state directory and writes a short report. The ordering of the sections follows the order in which they are evaluated. Keep the checksum beside the payload it describes.

