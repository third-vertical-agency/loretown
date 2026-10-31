import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../components/layout/MainLayout";

// Home & Explore
import HomePage from "../pages/home/HomePage";
import ExplorePage from "../pages/explore/ExplorePage";

// Gods
import GodsPage from "../pages/gods/GodsPage";
import GodDetailPage from "../pages/gods/GodDetailPage";

// Demons
import DemonsPage from "../pages/demons/DemonsPage";
import DemonDetailPage from "../pages/demons/DemonDetailPage";

// Creatures
import CreaturesPage from "../pages/creatures/CreaturesPage";
import CreatureDetailPage from "../pages/creatures/CreatureDetailPage";

// Heroes
import HeroesPage from "../pages/heroes/HeroesPage";
import HeroDetailPage from "../pages/heroes/HeroDetailPage";

// Mythologies
import MythologiesPage from "../pages/mythologies/MythologiesPage";
import MythologyDetailPage from "../pages/mythologies/MythologyDetailPage";

// Realms
import RealmsPage from "../pages/realms/RealmsPage";
import RealmDetailPage from "../pages/realms/RealmDetailPage";

// Artifacts
import ArtifactsPage from "../pages/artifacts/ArtifactsPage";
import ArtifactDetailPage from "../pages/artifacts/ArtifactDetailPage";

// Stories
import StoriesPage from "../pages/stories/StoriesPage";
import StoryDetailPage from "../pages/stories/StoryDetailPage";

// Search & 404
import SearchPage from "../pages/search/SearchPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Explore */}
        <Route path="/explore" element={<ExplorePage />} />

        {/* Gods */}
        <Route path="/gods" element={<GodsPage />} />
        <Route path="/gods/:slug" element={<GodDetailPage />} />

        {/* Demons */}
        <Route path="/demons" element={<DemonsPage />} />
        <Route path="/demons/:slug" element={<DemonDetailPage />} />

        {/* Creatures */}
        <Route path="/creatures" element={<CreaturesPage />} />
        <Route path="/creatures/:slug" element={<CreatureDetailPage />} />

        {/* Heroes */}
        <Route path="/heroes" element={<HeroesPage />} />
        <Route path="/heroes/:slug" element={<HeroDetailPage />} />

        {/* Mythologies */}
        <Route path="/mythologies" element={<MythologiesPage />} />
        <Route path="/mythologies/:slug" element={<MythologyDetailPage />} />

        {/* Realms */}
        <Route path="/realms" element={<RealmsPage />} />
        <Route path="/realms/:slug" element={<RealmDetailPage />} />

        {/* Artifacts */}
        <Route path="/artifacts" element={<ArtifactsPage />} />
        <Route path="/artifacts/:slug" element={<ArtifactDetailPage />} />

        {/* Stories */}
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:slug" element={<StoryDetailPage />} />

        {/* Search */}
        <Route path="/search" element={<SearchPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
