using System;
using System.Collections.Generic;

namespace Domain.Localization
{
    public class LocalizationSet
    {
        public Guid Id { get; set; }

        public virtual ICollection<Localization> Localizations { get; set; }
    }
}