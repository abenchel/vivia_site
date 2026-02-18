import { useEffect, useMemo, useState } from "react";
import CacheManager from "@/components/CacheManager";
import Navbar from "@/components/Navbar";
export {};
      <Navbar />
      <main className="pt-24 md:pt-28">
        <section className="mx-auto max-w-4xl px-6 py-10">
          <div className="rounded-2xl border border-white/10 bg-card/30 backdrop-blur p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Creator Tools</h1>
                <p className="text-muted-foreground">Accès réservé pour la gestion technique.</p>
              </div>
              {isAuthed && (
                <Button variant="outline" onClick={handleLogout}>
                  Se déconnecter
                </Button>
              )}
            </div>

            {!isAuthed ? (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Mot de passe</label>
                  <input
                    type="password"
                    value={input}
                    onChange={(event) => {
                      setInput(event.target.value);
                      setError("");
                    }}
                    className="w-full rounded-lg border border-white/10 bg-background/40 px-4 py-3 text-foreground outline-none focus:border-violet-400/50"
                    placeholder="Entrez le mot de passe"
                  />
                  {error && <p className="text-sm text-red-400">{error}</p>}
                </div>
                <Button type="submit" disabled={!input.trim()}>
                  Accéder
                </Button>
              </form>
            ) : (
              <div className="mt-8">
                <CacheManager />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
