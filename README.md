# mathdro.id

This page is intentionally left blank.

Draw on it. The page resets every midnight (Asia/Jakarta); yesterday's drawing
gets posted to Discord as the drawing of the day.

```
ssh mathdro.id
```

## Env

- `DB_PATH` - sqlite file, defaults to `data/drawing.db` (mount `/app/data` in Docker)
- `DISCORD_WEBHOOK_URL` - webhook for the daily post; unset = no posting
